import React, { useEffect, useRef, useState } from "react";

interface MatrixAvatarCardProps {
  src: string;
  alt?: string;
  gridResolution?: number;
  themeColor?: string;
  initialColorMode?: "original" | "theme";
  fontSize?: number;
  pushStrength?: number;
  mouseRadius?: number;
  springStrength?: number;
  friction?: number;
}

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  normX: number;
  normY: number;
  vx: number;
  vy: number;
  r: number;
  g: number;
  b: number;
  tr: number;
  tg: number;
  tb: number;
  ta: number;
  char: string;
  brightness: number;
}

const CHAR_SET = '`.":-+*=';

export default function MatrixAvatarCard({
  src,
  alt = "Profile Portrait",
  gridResolution = 90,
  themeColor = "#00f0ff",
  initialColorMode = "theme",
  fontSize = 8,
  pushStrength = 0.04,
  mouseRadius = 45,
  springStrength = 0.12,
  friction = 0.78,
}: MatrixAvatarCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const hasLoadedRef = useRef(false);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const [isSettled, setIsSettled] = useState(false);
  const settledRef = useRef(false);
  const currentModeRef = useRef(initialColorMode === "original" ? 1 : 0);

  const [displayMode, setDisplayMode] = useState<"ascii" | "photo">("ascii");
  const [colorMode, setColorMode] = useState<"original" | "theme">(initialColorMode);
  const [dimensions, setDimensions] = useState({ width: 384, height: 384 });

  // Auto cycle color modes every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setColorMode((prev) => (prev === "theme" ? "original" : "theme"));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Update dimensions on resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDimensions({
          width: Math.floor(rect.width),
          height: Math.floor(rect.height),
        });
      }
    };

    updateSize();
    const observer = new ResizeObserver(() => updateSize());
    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  // Sync canvas resolution with high DPI
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !dimensions.width || !dimensions.height) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    particlesRef.current.forEach((p) => {
      const tx = p.normX * dimensions.width;
      const ty = p.normY * dimensions.height;
      p.targetX = tx;
      p.targetY = ty;
      if (p.x === 0 && p.y === 0) {
        p.x = tx + (Math.random() - 0.5) * 20;
        p.y = ty + (Math.random() - 0.5) * 20;
      }
    });
  }, [dimensions]);

  // Load and sample image pixels to build particles
  useEffect(() => {
    if (hasLoadedRef.current) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      hasLoadedRef.current = true;
      const offscreen = document.createElement("canvas");
      const ctx = offscreen.getContext("2d");
      if (!ctx) return;

      const resX = gridResolution;
      const resY = Math.round(resX * (img.height / img.width));
      offscreen.width = resX;
      offscreen.height = resY;
      ctx.drawImage(img, 0, 0, resX, resY);

      const imgData = ctx.getImageData(0, 0, resX, resY).data;
      const particles: Particle[] = [];

      // Parse theme hex color (e.g. #00f0ff)
      const fullHex = themeColor.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (_, r, g, b) => r + r + g + g + b + b
      );
      const parsedHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
      const themeRgb = parsedHex
        ? {
            r: parseInt(parsedHex[1], 16),
            g: parseInt(parsedHex[2], 16),
            b: parseInt(parsedHex[3], 16),
          }
        : { r: 0, g: 240, b: 255 };

      for (let y = 0; y < resY; y++) {
        for (let x = 0; x < resX; x++) {
          const idx = (y * resX + x) * 4;
          const r = imgData[idx];
          const g = imgData[idx + 1];
          const b = imgData[idx + 2];
          const a = imgData[idx + 3];

          // Skip transparent or near-invisible pixels
          if (a < 50) continue;

          const normX = x / resX;
          const normY = y / resY;

          // Standard luminosity brightness
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
          if (brightness < 18 && a < 150) continue;

          const normB = Math.max(0, Math.min(1, (brightness - 15) / 220));
          // Easing curve for high-contrast ASCII density
          const easeB = 3 * Math.pow(normB, 2) - 2 * Math.pow(normB, 3);
          const charIdx = Math.min(
            CHAR_SET.length - 1,
            Math.max(0, Math.floor(easeB * (CHAR_SET.length - 1)))
          );
          const char = CHAR_SET[charIdx];

          // Dynamic vibrance boost for color mode
          const boost = Math.max(1.35, 112 / (brightness || 1));
          const boostedR = Math.min(255, Math.floor(r * boost));
          const boostedG = Math.min(255, Math.floor(g * boost));
          const boostedB = Math.min(255, Math.floor(b * boost));
          const lum = (boostedR + boostedG + boostedB) / 3;

          const satR = Math.min(255, Math.max(0, Math.floor(lum + (boostedR - lum) * 1.25)));
          const satG = Math.min(255, Math.max(0, Math.floor(lum + (boostedG - lum) * 1.25)));
          const satB = Math.min(255, Math.max(0, Math.floor(lum + (boostedB - lum) * 1.25)));
          const alpha = Math.min(1, (brightness / 255) * 0.55 + 0.45);

          particles.push({
            x: 0,
            y: 0,
            targetX: 0,
            targetY: 0,
            normX,
            normY,
            vx: 0,
            vy: 0,
            r: satR,
            g: satG,
            b: satB,
            tr: themeRgb.r,
            tg: themeRgb.g,
            tb: themeRgb.b,
            ta: alpha,
            char,
            brightness,
          });
        }
      }

      particlesRef.current = particles;
      const curW = dimensions.width;
      const curH = dimensions.height;

      // Initial explosion dispersal
      particles.forEach((p) => {
        const tx = p.normX * curW;
        const ty = p.normY * curH;
        p.targetX = tx;
        p.targetY = ty;

        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + 80 * Math.random();
        p.x = tx + Math.cos(angle) * dist;
        p.y = ty + Math.sin(angle) * dist;
        p.vx = (Math.random() - 0.5) * 2;
        p.vy = (Math.random() - 0.5) * 2;
      });

      startTimeRef.current = Date.now();
    };
  }, [src, gridResolution, themeColor, dimensions.width, dimensions.height]);

  // Main canvas animation and physics loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      ctx.font = `bold ${fontSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      const targetModeVal = colorMode === "original" ? 1 : 0;
      const modeDiff = targetModeVal - currentModeRef.current;
      if (Math.abs(modeDiff) > 0.001) {
        currentModeRef.current += 0.015 * Math.sign(modeDiff);
        currentModeRef.current = Math.max(0, Math.min(1, currentModeRef.current));
      } else {
        currentModeRef.current = targetModeVal;
      }
      const modeProgress = currentModeRef.current;

      const now = Date.now();
      const elapsed =
        startTimeRef.current !== null ? now - startTimeRef.current : 4501;
      const isIntro = elapsed < 4500;
      const introProgress = Math.min(1, elapsed / 4500);
      const easeIntro = introProgress * introProgress * (3 - 2 * introProgress);

      if (!isIntro && !settledRef.current) {
        settledRef.current = true;
        setIsSettled(true);
      }

      const curSpring = isIntro
        ? 0.1 * springStrength + easeIntro * springStrength * 0.9
        : springStrength;
      const curFriction = isIntro
        ? 0.97 - easeIntro * (0.97 - friction)
        : friction;
      const curMouseRadius = settledRef.current
        ? 1.4 * mouseRadius
        : 0.4 * mouseRadius;
      const curPushStrength = settledRef.current
        ? 1.8 * pushStrength
        : 0.2 * pushStrength;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (isIntro) {
          const swirl = (1 - easeIntro) * 0.3;
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.vx += -dy * swirl * 0.001;
          p.vy += dx * swirl * 0.001;
          p.vx += (Math.random() - 0.5) * (1 - easeIntro) * 0.08;
          p.vy += (Math.random() - 0.5) * (1 - easeIntro) * 0.08;
        }

        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const dist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (dist < curMouseRadius) {
          const force = Math.pow((curMouseRadius - dist) / curMouseRadius, 1.4);
          const angle = Math.atan2(mdy, mdx);
          p.vx += Math.cos(angle) * force * curPushStrength * 120;
          p.vy += Math.sin(angle) * force * curPushStrength * 120;
        }

        // Spring attraction to target
        const tx = p.targetX - p.x;
        const ty = p.targetY - p.y;
        p.vx += tx * curSpring;
        p.vy += ty * curSpring;
        p.vx *= curFriction;
        p.vy *= curFriction;
        p.x += p.vx;
        p.y += p.vy;

        if (
          !isIntro &&
          Math.abs(p.vx) < 0.01 &&
          Math.abs(p.vy) < 0.01 &&
          Math.abs(tx) < 0.1 &&
          Math.abs(ty) < 0.1
        ) {
          p.x = p.targetX;
          p.y = p.targetY;
          p.vx = 0;
          p.vy = 0;
        }

        // Color interpolation between Theme and Original
        const cr = Math.round(p.tr + (p.r - p.tr) * modeProgress);
        const cg = Math.round(p.tg + (p.g - p.tg) * modeProgress);
        const cb = Math.round(p.tb + (p.b - p.tb) * modeProgress);
        const ca = p.ta + (1 - p.ta) * modeProgress;

        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${ca.toFixed(2)})`;
        ctx.fillText(p.char, p.x, p.y);
      }

      animIdRef.current = requestAnimationFrame(render);
    };

    if (displayMode === "ascii") {
      animIdRef.current = requestAnimationFrame(render);
    }

    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current);
    };
  }, [
    dimensions,
    fontSize,
    mouseRadius,
    pushStrength,
    springStrength,
    friction,
    displayMode,
    colorMode,
  ]);

  // Pointer event handlers for repulsion
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = el.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };

    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    el.addEventListener("mousemove", onMouseMove, { passive: true });
    el.addEventListener("mouseleave", onLeave, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onLeave, { passive: true });

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  return (
    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96">
      {/* Decorative neon purple floating ring */}
      <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.5)] pointer-events-none z-30" />

      {/* Outer tilted glowing neon borders */}
      <div className="absolute -inset-4 border border-[#00f0ff]/30 rounded-2xl rotate-6 animate-pulse pointer-events-none transition-all duration-700" />
      <div className="absolute -inset-4 border border-[#7C3AED]/30 rounded-2xl -rotate-3 pointer-events-none transition-all duration-700" />

      {/* Main interactive card container */}
      <div
        ref={containerRef}
        className={`relative w-full h-full rounded-2xl overflow-hidden border bg-[#070b14]/70 shadow-2xl group cursor-crosshair select-none transition-all duration-1000 ${
          isSettled
            ? "border-[#00f0ff]/40 shadow-[0_0_25px_rgba(0,240,255,0.15)]"
            : "border-slate-800/80"
        }`}
      >
        {/* Canvas ASCII / Matrix View */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            displayMode === "ascii" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{ display: "block" }}
        />

        {/* Clean Original Photo View */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            displayMode === "photo" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-[#00f0ff]/10 mix-blend-overlay z-10 pointer-events-none" />
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Neon Laser Scanline */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-60 shadow-[0_0_10px_#00f0ff] animate-scan pointer-events-none z-10" />

        {/* Interactive Mode Controls */}
        <div className="absolute bottom-3 right-3 z-20 flex gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
          {displayMode === "ascii" && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setColorMode((prev) => (prev === "theme" ? "original" : "theme"));
              }}
              className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider rounded border border-[#00f0ff]/40 bg-slate-950/95 text-[#00f0ff] hover:bg-[#00f0ff]/15 hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
            >
              {colorMode === "theme" ? "Colors" : "Matrix"}
            </button>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDisplayMode((prev) => (prev === "ascii" ? "photo" : "ascii"));
            }}
            className="px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider rounded border border-[#00f0ff]/40 bg-slate-950/95 text-[#00f0ff] hover:bg-[#00f0ff]/15 hover:shadow-[0_0_10px_rgba(0,240,255,0.35)] transition-all cursor-pointer shadow-md"
          >
            {displayMode === "ascii" ? "Photo" : "Matrix"}
          </button>
        </div>
      </div>
    </div>
  );
}
