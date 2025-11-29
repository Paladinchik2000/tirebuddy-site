import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function ContactPage() {
  const PRIMARY_RED = "#E63946";
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "error" | null

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    if (form._gotcha.value) return; // защита от ботов

    const data = new FormData(form);

    try {
      // === reCAPTCHA v3 ===
      const token = await window.grecaptcha.execute("6Lf1S_srAAAAACf8o0ecHsRxrazjUBKUxHC51O4F", { action: "submit" });
      data.append("g-recaptcha-response", token);

      const res = await fetch("https://formspree.io/f/mnnondng", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>Contact TireBuddy | Ontario Mobile Tire Service</title>
        <meta
          name="description"
          content="Contact TireBuddy for fast, mobile tire change and repair services anywhere in Ontario. We’ll come to you — driveway or workplace!"
        />
        <meta property="og:title" content="TireBuddy - Contact Us" />
        <meta
          property="og:description"
          content="Get in touch with TireBuddy for mobile tire change and repair across Ontario. We're happy to help!"
        />
        <meta property="og:image" content="/images/logo-buddy.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirebuddy.ca/contact" />
      </Helmet>

      <div className="min-h-screen bg-[#F4F4F4]">
        {/* ===== BANNER ===== */}
        <section className="bg-[#E63946] text-white text-center py-10 shadow-md">
          <h1 className="text-4xl font-bold mb-2">Need support? Get in touch!</h1>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            We're here to help with any questions about our services or your upcoming appointment.
          </p>
        </section>

        {/* ===== CONTACT INFO + FORM ===== */}
        <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
          {/* CONTACT INFO */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-600 mb-6">
              Whether it’s a question, feedback, or booking inquiry — we’d love to hear from you.
            </p>

            <ul className="space-y-4 text-slate-700">
              <li>
                <strong className="block text-slate-900">📞 Phone:</strong>
                <a href="tel:+14374558729" className="text-[#E63946] hover:underline">
                  +1 (437) 455-8729
                </a>
              </li>
              <li>
                <strong className="block text-slate-900">✉️ Email:</strong>
                <a href="mailto:info@tirebuddy.ca" className="text-[#E63946] hover:underline">
                  info@tirebuddy.ca
                </a>
              </li>
              <li>
                <strong className="block text-slate-900">📍 Location:</strong>
                Ontario, Canada
              </li>
            </ul>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
              {/* Honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2"
              />
              <textarea
                name="message"
                placeholder="How can we help you?"
                rows="5"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-2"
              ></textarea>

              <button
                type="submit"
                disabled={submitting}
                className="g-recaptcha w-full rounded-lg py-3 font-semibold text-white shadow hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: PRIMARY_RED }}
              >
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </section>

        {/* ===== POPUP CONFIRMATION ===== */}
        {status === "ok" && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent ✅</h3>
              <p className="text-slate-600 mb-5">
                Thanks for reaching out! We’ll get back to you shortly.
              </p>
              <button
                onClick={() => setStatus(null)}
                className="rounded-lg px-5 py-2 font-semibold text-white"
                style={{ background: PRIMARY_RED }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Something went wrong</h3>
              <p className="text-slate-600 mb-5">
                Please try again or contact us directly at{" "}
                <a href="mailto:info@tirebuddy.ca" className="text-[#E63946] underline">
                  info@tirebuddy.ca
                </a>.
              </p>
              <button
                onClick={() => setStatus(null)}
                className="rounded-lg px-5 py-2 font-semibold text-white"
                style={{ background: PRIMARY_RED }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
