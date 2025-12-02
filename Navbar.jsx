// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header
      id="top"
      className="sticky top-0 z-10 bg-yellow-500 backdrop-blur border-4 border-green-500"
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
            GIS
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Goal International School</p>
            <p className="text-[11px] text-slate-500">Information Brochure</p>
          </div>
        </div>

        <nav className="hidden sm:flex gap-4 text-sm text-slate-700">
          <a href="#main" className="hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#academics" className="hover:text-blue-600">
            Academics
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
