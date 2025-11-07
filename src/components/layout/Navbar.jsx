import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-emerald-300 border-b-2 border-emerald-300"
      : "text-white hover:text-emerald-200";

  return (
    <nav className="fixed top-0 left-0 w-full bg-emerald-800/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-white">EM</h1>
        <ul className="flex gap-8 text-lg">
          <li><Link to="/" className={`${isActive("/")} transition-colors duration-200`}>Home</Link></li>
          <li><Link to="/about" className={`${isActive("/about")} transition-colors duration-200`}>About</Link></li>
          <li><Link to="/projects" className={`${isActive("/resume")} transition-colors duration-200`}>Projects</Link></li>
          <li><Link to="/personal" className={`${isActive("/contact")} transition-colors duration-200`}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
