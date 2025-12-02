// src/components/Contact.jsx
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry! (demo form only)");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-16 border-y-4 border-green-500 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3FrW4wV_6ksQbwc3UXwW8ugs8R_gV-Oq5WlGvs5gDu3Zp5m2Q72ZOGYVJNDfvLf0Ysc&usqp=CAU')",
      }}
    >
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/40" />

      <div className="relative max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 text-white">
        {/* Left: brochure-style contact info */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">
            Contact & Admission Enquiry
          </h2>
          <p className="mt-2 text-sm text-slate-100/90">
            For detailed information about admission procedure, fee structure
            and transport routes, please contact the school office.
          </p>

          <div className="mt-4 text-sm space-y-2">
            <p>
              <span className="font-semibold text-emerald-200">
                School Address:
              </span>
              <br />
              <span className="text-xl">π</span> International School,
              <br />
              B-58, Buddha Colony, Near B.D. Public School,
              <br />
              Patna, Bihar 800001
            </p>
            <p>
              <span className="font-semibold text-emerald-200">Phone:</span>{" "}
              <a href="tel:+06123508700" className="hover:underline">
                +0612-3508700
              </a>
            </p>
            <p>
              <span className="font-semibold text-emerald-200">Email:</span>{" "}
              <a
                href="mailto:goalpatna@gmail.com"
                className="hover:underline"
              >
                goalpatna@gmail.com
              </a>
            </p>
          </div>

          <p className="mt-4 text-[14px] text-slate-300">
            (These contact details are taken from the official <span className="text-xl">π</span> website.
            Make sure they match the latest brochure.)
          </p>
        </div>

        {/* Right: simple enquiry form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-3 rounded-2xl border border-emerald-400/80 bg-white/95 p-4 text-sm text-slate-800 shadow-lg backdrop-blur"
        >
          <div>
            <label className="block text-xs text-slate-600 mb-1">
              Parent / Guardian Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-slate-600 mb-1">
              Contact Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400"
              placeholder="Mobile number"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-slate-600 mb-1">
              Message / Class for Admission
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400 min-h-[80px]"
              placeholder="Write your query here"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-1 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold shadow hover:bg-emerald-500 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
