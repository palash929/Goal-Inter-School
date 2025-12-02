// src/components/Main.jsx
import React from "react";

export default function Main() {
  return (
    <section
      id="main"
      className="py-16 bg-cover bg-center bg-no-repeat border-4 border-green-500"
      style={{
       backgroundImage:
       "url('https://img.freepik.com/premium-vector/sustainable-development-goals-set-global-objectives-eradicating-hunger-ensuring-education_277904-26341.jpg')",
    }}
    >
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: main intro */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-700">
            Goal International School
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
            Information Brochure – A School for Holistic Development
          </h1>
          <p className="mt-3 text-sm text-slate-700">
            Goal International School offers a disciplined, caring and
            academically strong environment. The school aims to build
            concepts, character and confidence in every child.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl bg-white border border-slate-200 p-3">
              <p className="font-semibold text-slate-900">Board</p>
              <p className="text-slate-700">CBSE (Curriculum based on N.E.P.)</p>
            </div>
            <div className="rounded-xl bg-white border border-slate-200 p-3">
              <p className="font-semibold text-slate-900">Location</p>
              <p className="text-slate-700">Buddha Colony, Patna</p>
            </div>
          </div>
        </div>

        {/* Right: simple brochure-style box */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-sm">
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
            (You can replace these bullet points with the exact ones from the
            official PDF brochure.)
          </p>
        </div>
      </div>
    </section>
  );
}

