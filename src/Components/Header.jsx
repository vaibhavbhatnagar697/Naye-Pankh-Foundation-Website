import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
function Header({ darkMode, setDarkMode }) {
  const modeTogglar = () => {
    console.log(darkMode);
    let newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("Mode", JSON.stringify(newMode));
  };
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-opacity-80 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">NayePankh Foundation</h1>
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="/" className="hover:text-blue-500">
              Home
            </a>
          </li>

          <li>
            <a href="/Program" className="hover:text-blue-500">
              Programs
            </a>
          </li>

          <li>
            <a href="/Event" className="hover:text-blue-500">
              Events
            </a>
          </li>
          <li>
            <a href="/Gallery" className="hover:text-blue-500">
              Gallery
            </a>
          </li>
          <li>
            <a href="/Testimonial" className="hover:text-blue-500">
              Testimonials
            </a>
          </li>
        </ul>
        <button
          onClick={modeTogglar}
          className="p-2 rounded-full hover:scale-110 transition"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </div>
    </nav>
  );
}
export default Header;
