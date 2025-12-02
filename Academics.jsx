// src/components/Academics.jsx
import React from "react";

export default function Academics() {
  return (
    <section
      id="academics"
      className="relative py-16 border-y-4 border-green-500 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://thumbs.dreamstime.com/b/vibrant-school-buildings-surround-pristine-artificial-turf-soccer-field-goal-under-bright-blue-sky-wide-shot-empty-398562052.jpg')",
      }}
    >
      {/* light overlay */}
      <div className="absolute inset-0 bg-slate-900/75" />

      <div className="relative max-w-5xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          Academics & Program Structure
        </h2>
        <p className="mt-2 text-sm text-white max-w-3xl">
          The academic programme is designed to build strong basics from early
          classes and gradually lead students towards higher-level thinking and
          competitive examinations.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl border border-emerald-300/80 bg-slate-900/50 p-3 backdrop-blur">
            <p className="font-semibold text-emerald-200 mb-1">
              Primary (I–V)
            </p>
            <p className="text-slate-100 text-[13px]">
              Emphasis on reading, writing, arithmetic and activity-based
              learning to create interest in studies.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-300/80 bg-slate-900/50 p-3 backdrop-blur">
            <p className="font-semibold text-emerald-200 mb-1">
              Middle School (VI–VIII)
            </p>
            <p className="text-slate-100 text-[13px]">
              Systematic teaching of Maths, Science, Languages and Social
              Science with regular tests and doubt clearing.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-300/80 bg-slate-900/50 p-3 backdrop-blur">
            <p className="font-semibold text-emerald-200 mb-1">
              Secondary / Foundation
            </p>
            <p className="text-slate-100 text-[13px]">
              Integration of school syllabus with foundation for NEET / JEE and
              other competitive exams under guidance of GOAL experts.
            </p>
          </div>
        </div>

        <p className="mt-4 text-[14px] text-white">
          (Adjust class ranges / details according to the exact brochure
          content.)
        </p>
      </div>
    </section>
  );
}
