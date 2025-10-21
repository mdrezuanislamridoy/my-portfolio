import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="bg-slate-950 text-white cursor-none">
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
