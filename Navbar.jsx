// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header
      id="top"
      className="sticky top-0 z-20 bg-white/85 backdrop-blur border-b border-emerald-500/70 shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-sm">
            GIS
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">
              Goal International School
            </p>
            <p className="text-[11px] text-slate-500">
              Information Brochure
            </p>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-4 text-sm text-slate-700">
          <a href="#main" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#academics" className="hover:text-blue-600 transition">
            Academics
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
          <a
            href="https://www.goalinstitute.org/Goal%20International%20School%20Information%20Brochure-5.pdf"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center rounded-full border border-emerald-500 px-3 py-1 text-[11px] font-semibold text-emerald-700 hover:bg-emerald-500 hover:text-white transition"
          >
            Download Brochure
          </a>
        </nav>
      </div>
    </header>
  );
}

