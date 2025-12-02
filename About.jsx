// src/components/About.jsx
import React from "react";

export default function About() {
  return (
    <section id="about" 
      className="py-16 bg-cover bg-center bg-no-repeat  border-4 border-green-500"
      style={{
       backgroundImage:
       "url('https://calcuttais.edu.in/wp-content/uploads/2025/03/Banner-Image-1920x866-1.jpg')",
    }}
    >
      
      <div className="max-w-5xl mx-auto px-4 text-xl-bold">
        <h2 className="text-xl font-semibold text-white">About the School</h2>
        <p className="mt-2 text-xl text-bold text-white">
          Goal International School has been established to provide a modern,
          structured and value-based schooling environment. It combines the
          academic culture of GOAL Institute with a child-friendly school
          atmosphere.
        </p>

        <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="font-semibold text-slate-900 mb-1">Vision</p>
            <p className="text-slate-700">
              To nurture students into confident, disciplined and responsible
              citizens with strong academic foundations.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="font-semibold text-slate-900 mb-1">Mission</p>
            <p className="text-slate-700">
              To blend school education with competitive exam readiness through
              systematic teaching and regular evaluation.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="font-semibold text-slate-900 mb-1">Campus Features</p>
            <p className="text-slate-700">
              Spacious classrooms, academic support, co-curricular activities,
              transport and health care facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
