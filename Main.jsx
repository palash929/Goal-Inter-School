// src/components/Main.jsx
import React from "react";

export default function Main() {
  return (
    <section
      id="main"
      className="relative py-16 md:py-20 border-y-4 border-green-500 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/sustainable-development-goals-set-global-objectives-eradicating-hunger-ensuring-education_277904-26341.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center text-white">
        {/* Left: main intro */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-300">
            Goal International School
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-snug">
            Information Brochure – A School for Holistic Development
          </h1>
          <p className="mt-3 text-sm text-slate-100/90">
            Goal International School offers a disciplined, caring and
            academically strong environment. The school aims to build concepts,
            character and confidence in every child.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-900 shadow hover:bg-emerald-400 transition"
            >
              Admission Enquiry
            </a>
            <a
              href="tel:+06123508700"
              className="inline-flex items-center rounded-full border border-emerald-300 px-4 py-2 font-semibold text-emerald-100 hover:bg-white/10 transition"
            >
              Call Office: 0612-3508700
            </a>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-slate-900/50 border border-emerald-400/60 p-3 backdrop-blur">
              <p className="font-semibold text-white">Board</p>
              <p className="text-slate-100 text-[13px]">
                CBSE (Curriculum based on N.E.P.)
              </p>
            </div>
            <div className="rounded-xl bg-slate-900/50 border border-emerald-400/60 p-3 backdrop-blur">
              <p className="font-semibold text-white">Location</p>
              <p className="text-slate-100 text-[13px]">
                Buddha Colony, Patna
              </p>
            </div>
          </div>
        </div>

        {/* Right: brochure-style box */}
        <div className="bg-white/90 rounded-2xl border border-slate-200 shadow-lg p-4 text-sm text-slate-800 backdrop-blur">
          <h2 className="text-base font-semibold text-slate-900">
            Key Highlights
          </h2>
          <ul className="mt-3 space-y-1 text-slate-700 list-disc list-inside">
            <li>Concept-based teaching with clear fundamentals</li>
            <li>Focus on discipline, time management and ethics</li>
            <li>Academic support from GOAL Institute legacy</li>
            <li>Co-curricular and sports activities</li>
          </ul>
          <p className="mt-4 text-[11px] text-slate-500">
            (Replace these bullet points with the exact ones from the official
            PDF brochure once finalised.)
          </p>
        </div>
      </div>
    </section>
  );
}

