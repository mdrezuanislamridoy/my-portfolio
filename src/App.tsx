import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import CustomCursor from "./components/CustomCursor";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
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
