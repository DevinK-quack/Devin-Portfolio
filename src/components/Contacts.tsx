"use client";
import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    // Replace with your Web3Forms access key from web3forms.com
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission error", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Direct Info */}
        <div>
          <span className="text-[11px] font-[family-name:var(--font-outfit)] tracking-widest text-[#0052FF] font-semibold uppercase">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[#0F172A] mt-2 mb-4">
            Get In Touch
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed mb-8">
            Whether you have a question about my projects, want to discuss software development opportunities, or just want to connect, feel free to drop a message.
          </p>

          <div className="space-y-4 text-sm text-[#475569]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0052FF]">
                <Mail size={18} />
              </div>
              <span>devin.kulasekere@example.com</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-[#0052FF]">
                <MapPin size={18} />
              </div>
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="p-8 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#0F172A] mb-1">Message Sent!</h3>
              <p className="text-xs text-[#475569]">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0052FF] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 text-sm rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0052FF] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 text-sm rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#0052FF] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#0052FF] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,82,255,0.25)] hover:bg-[#0043D1] hover:shadow-[0_6px_20px_rgba(0,82,255,0.35)] transition-all disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}