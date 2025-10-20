import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <div className="w-full  bg-slate-900 shadow-2xl shadow-slate-900">
      <div className="flex max-w-7xl m-auto justify-between items-center p-3 relative">
        <h2
          className="text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400  font-bold
        "
        >
          Ridoy Babu
        </h2>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-slate-400">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                className="hover:text-white transition-colors duration-200"
                to={link.path}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl text-slate-200 z-50"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <IoCloseCircleOutline /> : <FaBarsStaggered />}
        </button>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-1/2 bg-slate-700 p-6 rounded-l-2xl shadow-lg transition-all duration-300 ease-in-out transform
        ${
          visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        >
          <ul className="flex flex-col gap-4 text-slate-200 mt-12">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  className="block py-2 px-3 rounded-lg hover:bg-slate-600 hover:text-white transition-all duration-200"
                  to={link.path}
                  onClick={() => setVisible(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
