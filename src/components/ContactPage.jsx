export default function ContactPage() {
  const PRIMARY_RED = "#E63946";

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      {/* ===== BANNER ===== */}
      <section
        className="bg-[#E63946] text-white text-center py-10 shadow-md"
      >
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
              <a href="tel:+14164285819" className="text-[#E63946] hover:underline">
                +1 (416) 428-5819
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
          <form
            action="https://formspree.io/f/xwprnndy"
            method="POST"
            className="space-y-4"
          >
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
              className="w-full rounded-lg py-3 font-semibold text-white shadow hover:opacity-90 transition"
              style={{ background: PRIMARY_RED }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
