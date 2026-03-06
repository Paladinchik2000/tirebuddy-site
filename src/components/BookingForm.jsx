import { useState } from "react";

const ENDPOINT = "https://formspree.io/f/mnnondng"; // endpoint

export default function BookingForm() {
  const PRIMARY_RED = "#E63946";
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    if (form._gotcha.value) {
      setSubmitting(false);
      return;
    }

    const data = new FormData(form);
    data.append("_subject", "New TireBuddy Booking Request");
    data.append("_template", "table");

    try {
      const res = await fetch(ENDPOINT, {
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
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
        Book an Appointment
      </h2>

      {/* ====== UPDATED FORM ====== */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

        <label className="block">
          Your email:
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2 mt-1"
          />
        </label>

        <label className="block">
          Your message:
          <textarea
            name="message"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-2 mt-1"
          ></textarea>
        </label>

        {/* Остальные поля формы */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2"
        />
        <input
          type="text"
          name="address"
          placeholder="Service Address"
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-2"
        />

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg text-white py-3 font-semibold shadow hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ background: PRIMARY_RED }}
        >
          {submitting ? "Sending..." : "Send"}
        </button>
      </form>

      {/* ===== POPUP ===== */}
      {status === "ok" && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full text-center shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent ✅</h3>
            <p className="text-slate-600 mb-5">
              Thanks! Your message has been sent successfully. We’ll reply to your email soon.
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
  );
}
