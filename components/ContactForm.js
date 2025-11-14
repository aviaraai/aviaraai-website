import React from "react";

export default function ContactForm() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 font-sora bg-white text-[#0F4C75]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* LEFT SIDE */}
        <div className="pr-4">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 bg-white text-[#0F4C75] px-3 py-1 rounded-full text-sm mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor">
              <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8" strokeWidth="1.5" />
              <rect x="2" y="3" width="20" height="18" rx="2" strokeWidth="1.5" />
            </svg>
            Contact Us
          </span>

          {/* Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0F4C75] leading-tight mb-6">
            Ready to Transform Your Business With AI?
          </h1>

          {/* Description */}
          <p className="text-black max-w-xl mb-8">
            AviaraAI LLP builds smart, practical AI solutions for real-world
            problems. Contact us to learn how our technology can help your
            organisation grow.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            <InfoCard
              icon={buildingIcon()}
              title="Company"
              textTop="AviaraAI LLP"
            />

            <InfoCard
              icon={emailIcon()}
              title="Email"
              textTop="info@aviaraai.com"
              textBottom="24/7 Support Available"
            />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-[#0F4C75] text-white px-5 py-3 rounded-md shadow hover:bg-[#093753] transition"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#0F4C75]/20">
            <h2 className="text-2xl font-semibold text-black mb-6">
              Request Information
            </h2>

            <form
              action="https://formsubmit.co/asif@aviaraai.com"
              method="POST"
              className="space-y-5"
            >
              {/* Hidden Inputs */}
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/contact/thankyou"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="New contact form submission"
              />
              <input type="text" name="_honey" style={{ display: "none" }} />

              {/* Full Name */}
              <Input
                label="Full Name *"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                required
              />

              {/* Email */}
              <Input
                label="Email Address *"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
              />

              {/* Organization */}
              <Input
                label="Organization"
                name="organization"
                type="text"
                placeholder="Your organization or farm name"
              />

              {/* Phone */}
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
              />

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#0F4C75] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-lg border text-black border-[#0F4C75]/30 px-4 py-3 bg-white placeholder-[#0F4C75]/40 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]/40"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F4C75] text-white font-semibold rounded-lg px-6 py-3 shadow hover:bg-[#093753] transition"
              >
                Send Message
              </button>
            </form>

            <p className="text-xs text-[#0F4C75]/60 mt-4">
              We respect your privacy. Your information will only be used to
              contact you regarding your inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Reusable Components ---------------------- */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#0F4C75] mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-lg border text-black border-[#0F4C75]/30 px-4 py-3 bg-white placeholder-[#0F4C75]/40 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]/40"
      />
    </div>
  );
}

function InfoCard({ icon, title, textTop, textBottom }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-lg bg-[#0F4C75]/10 flex items-center justify-center text-[#0F4C75]">
        {icon}
      </div>

      <div>
        <div className="text-sm font-semibold text-[#0F4C75] mb-1">
          {title}
        </div>

        {/* BLACK TEXT — FIXED */}
        <div className="text-black font-medium">{textTop}</div>

        {textBottom && (
          <div className="text-sm text-black mt-1">{textBottom}</div>
        )}
      </div>
    </div>
  );
}

/* ---------------------- Icons ---------------------- */

function buildingIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
      <path d="M8 7h8M8 11h8M8 15h5" strokeWidth="1.5" />
    </svg>
  );
}

function emailIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor">
      <path d="M4 4h16v12H4z" strokeWidth="1.5" />
      <path d="M22 6l-10 7L2 6" strokeWidth="1.5" />
    </svg>
  );
}

function phoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor">
      <path
        d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 3 5.1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 .8c.2 1 .5 2 .8 3a1 1 0 0 1-.3 1l-1.5 1.4a16 16 0 0 0 7 7l1.3-1.3a1 1 0 0 1 1-.3 12 12 0 0 0 3 .8 1 1 0 0 1 .8 1z"
        strokeWidth="1.2"
      />
    </svg>
  );
}
