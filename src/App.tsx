import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="relative text-white min-h-screen cursor-none overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a] -z-20"></div>
      <ParticlesBackground />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
