import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "transparent" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100 },
          push: { quantity: 4 },
        },
      },
      particles: {
        number: { value: 200, density: { enable: true, area: 800 } },
        color: { value: "#60a5fa" },
        links: {
          enable: true,
          color: "#60a5fa",
          distance: 150,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          outModes: { default: "out" },
        },
        opacity: { value: 0.6 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full min-h-screen -z-10">
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

export default ParticlesBackground;
