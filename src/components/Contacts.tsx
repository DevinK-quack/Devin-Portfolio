"use client";
import React, { useState } from "react";
import { MapPin, Send, CheckCircle2 } from "lucide-react";

const whatsappUrl = "https://wa.me/+94755691239";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    // Replace with your Web3Forms access key from web3forms.com
    formData.append("access_key", "ae0f5098-3967-454f-a9f1-9fdefdca42c5");

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
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Direct Info */}
        <div>
          <span className="text-[11px] font-[family-name:var(--font-outfit)] font-semibold uppercase tracking-widest text-[#155eef]">
            Let&apos;s Connect
          </span>
          <h2 className="mb-4 mt-2 font-[family-name:var(--font-outfit)] text-4xl font-bold text-[#10243e] md:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-[#5c7189]">
            Whether you have a question about my projects, want to discuss software development opportunities, or just want to connect, feel free to drop a message.
          </p>

          <div className="space-y-4 text-sm text-[#475569]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="action-button group flex min-h-14 w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-[#10243e] hover:bg-[#e8f0f8] hover:text-[#155eef]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#d5e2ef] bg-[#e8f0f8] text-[#155eef] transition-colors group-hover:border-[#49a6ff]">
                <svg viewBox="0 0 32 32" role="img" aria-label="WhatsApp logo" className="h-[18px] w-[18px]">
                  <circle cx="16" cy="16" r="16" fill="#25D366" />
                  <path fill="#fff" d="M23.5 8.5A10.58 10.58 0 0 0 16 5.38c-5.86 0-10.62 4.76-10.62 10.62 0 1.87.49 3.7 1.42 5.3L5.3 26.62l5.44-1.43a10.6 10.6 0 0 0 5.26 1.4h.01c5.85 0 10.61-4.76 10.61-10.62 0-2.84-1.1-5.5-3.12-7.47Zm-7.5 16.27h-.01a8.8 8.8 0 0 1-4.49-1.23l-.32-.19-3.23.85.86-3.15-.21-.32a8.84 8.84 0 1 1 7.4 4.04Zm4.84-6.62c-.26-.13-1.53-.75-1.77-.84-.24-.09-.41-.13-.58.13-.17.26-.66.84-.81 1.01-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.27-1.51-1.42-1.77-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.91-.21-.5-.43-.43-.58-.44h-.49c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.15s.92 2.49 1.05 2.66c.13.17 1.81 2.76 4.39 3.87.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.53-.63 1.75-1.23.22-.6.22-1.12.15-1.23-.06-.11-.24-.17-.5-.3Z" />
                </svg>
              </div>
              <span>
                <strong className="block text-sm">Connect on WhatsApp</strong>
                <small className="text-xs text-[#5c7189]">Message me directly</small>
              </span>
            </a>

            <div className="flex min-h-14 items-center gap-3 rounded-xl px-3 py-2">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#d5e2ef] bg-[#e8f0f8] text-[#155eef]">
                <MapPin size={18} />
              </div>
              <span>Colombo, Sri Lanka</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="border border-[#d5e2ef] bg-white p-8 shadow-[0_18px_35px_rgba(16,36,62,0.07)]">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle2 size={48} className="text-emerald-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[#0F172A] mb-1">Message Sent!</h3>
              <p className="text-xs text-[#475569]">Thanks for reaching out. I&apos;ll get back to you soon.</p>
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
                  placeholder="Bruce Wayne"
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
                  placeholder="name@example.com"
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
                className="action-button flex w-full items-center justify-center gap-2 rounded-xl bg-[#0052FF] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(0,82,255,0.25)] hover:bg-[#0043D1] hover:shadow-[0_6px_20px_rgba(0,82,255,0.35)] disabled:opacity-50"
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