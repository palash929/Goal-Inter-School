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
    <section id="contact" className="py-16 bg-cover bg-center bg-no-repeat border-4 border-green-500"
    style={{
       backgroundImage:
       "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX3FrW4wV_6ksQbwc3UXwW8ugs8R_gV-Oq5WlGvs5gDu3Zp5m2Q72ZOGYVJNDfvLf0Ysc&usqp=CAU')",
    }}
    >
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Left: brochure-style contact info */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Contact & Admission Enquiry
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            For detailed information about admission procedure, fee structure and
            transport routes, please contact the school office.
          </p>

          <div className="mt-4 text-sm text-slate-800 space-y-1">
            <p>
              <span className="font-semibold">School Address:</span>
              <br />
              Goal International School,
              <br />
              B-58, Buddha Colony, Near B.D. Public School,
              <br />
              Patna, Bihar 800001
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +0612-3508700
            </p>
            <p>
              <span className="font-semibold">Email:</span> goalpatna@gmail.com
            </p>
          </div>

          <p className="mt-4 text-[11px] text-slate-500">
            (These contact details are taken from the official GOAL website. Make
            sure they match the latest brochure.)
          </p>
        </div>

        {/* Right: simple enquiry form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm"
        >
          <div>
            <label className="block text-xs text-slate-600 mb-1">
              Parent / Guardian Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600"
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
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600"
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
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 min-h-[80px]"
              placeholder="Write your query here"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-1 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-semibold"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
