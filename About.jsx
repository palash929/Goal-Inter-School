// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 border-y-4 border-green-500 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://calcuttais.edu.in/wp-content/uploads/2025/03/Banner-Image-1920x866-1.jpg')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-slate-900/75" />

      <div className="relative max-w-5xl mx-auto px-4 text-white">
        <h2 className="text-2xl font-semibold">
          About the School
        </h2>
        <p className="mt-3 text-sm md:text-base max-w-3xl text-slate-100">
          Goal International School has been established to provide a modern,
          structured and value-based schooling environment. It combines the
          academic culture of GOAL Institute with a child-friendly school
          atmosphere.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl border border-emerald-300/80 bg-slate-900/50 p-3 backdrop-blur">
            <p className="font-semibold text-emerald-200 mb-1">Vision</p>
            <p className="text-slate-100 text-[13px]">
              To nurture students into confident, disciplined and responsible
              citizens with strong academic foundations.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-300/80 bg-slate-900/50 p-3 backdrop-blur">
            <p className="font-semibold text-emerald-200 mb-1">Mission</p>
            <p className="text-slate-100 text-[13px]">
              To blend school education with competitive exam readiness through
              systematic teaching and regular evaluation.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-300/80 bg-slate-900/50 p-3 backdrop-blur">
            <p className="font-semibold text-emerald-200 mb-1">
              Campus Features
            </p>
            <p className="text-slate-100 text-[13px]">
              Spacious classrooms, academic support, co-curricular activities,
              transport and health care facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
