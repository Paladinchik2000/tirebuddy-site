import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function TireBuddyHome() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const PRIMARY_RED = "#E63946";
  const linkClass = ({ isActive }) =>
    (isActive ? "text-slate-900" : "text-slate-700") +
    " hover:text-slate-900 transition";

  return (
    <div className="bg-[#F4F4F4] min-h-screen flex flex-col">
      {loading ? (
        <div className="flex flex-col items-center justify-center flex-1">
          <img
            src="https://i.imgur.com/4YFSmoN.png"
            alt="Buddy loading"
            className="h-24 w-24 animate-spin"
          />
          <p className="text-slate-700 mt-3">Loading TireBuddy...</p>
        </div>
      ) : (
        <>
          <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-100">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 select-none">
                <img
                  src="https://i.imgur.com/4YFSmoN.png"
                  alt="Buddy logo"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-xl md:text-2xl font-extrabold text-slate-900">
                  Tire<span className="text-slate-800">Buddy</span>
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-8 text-sm">
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/services" className={linkClass}>Services</NavLink>
                <NavLink to="/about" className={linkClass}>About</NavLink>
                <NavLink to="/blog" className={linkClass}>Blog</NavLink>
                <a
                  href="/#booking"
                  className="ml-2 rounded-full px-4 py-2 font-semibold text-white shadow-sm hover:shadow transition"
                  style={{ background: PRIMARY_RED }}
                >
                  Book Now
                </a>
              </nav>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-slate-700 focus:outline-none text-2xl"
              >
                ☰
              </button>
            </div>

            {menuOpen && (
              <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-3">
                <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
                <br />
                <NavLink to="/services" className={linkClass} onClick={() => setMenuOpen(false)}>Services</NavLink>
                <br />
                <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
                <br />
                <NavLink to="/blog" className={linkClass} onClick={() => setMenuOpen(false)}>Blog</NavLink>
                <br />
                <a
                  href="/#booking"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-full px-4 py-2 text-center font-semibold text-white shadow-sm hover:shadow transition"
                  style={{ background: PRIMARY_RED }}
                >
                  Book Now
                </a>
              </div>
            )}
          </header>

          <main className="flex-1">
            <section className="text-center py-20">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Your Tire’s Best Friend
              </h1>
              <p className="text-slate-700 max-w-xl mx-auto">
                Fast, friendly, and mobile tire service across Ontario — from tire changes
                to seasonal cleanup, we come to you.
              </p>
            </section>

            <section id="services" className="max-w-6xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Our Services
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Tire Change", desc: "Seasonal swaps done at your driveway." },
                  { title: "Punctured Tire Repair", desc: "We fix flats on-site quickly." },
                  { title: "Gutter Cleaning", desc: "Prevent water damage to your home." },
                  { title: "Fall Cleanup", desc: "Keep your yard clean before winter." },
                  { title: "Snow Plowing", desc: "Reliable driveway clearing in winter." },
                ].map((s) => (
                  <article key={s.title} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition">
                    <h3 className="font-semibold text-slate-900">{s.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="booking" className="bg-[#F9FAFB] border-t border-slate-200 py-20">
  <div className="max-w-3xl mx-auto px-6">
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-slate-900 mb-2">Book Your Appointment</h2>
      <p className="text-slate-600">
        Fast, friendly, and mobile — we come to you. Fill out the form below and we’ll get back to you shortly.
      </p>
    </div>

    <form
      action="https://formspree.io/f/xwprnndy"
      method="POST"
      className="bg-white shadow-md rounded-2xl p-8 space-y-5 border border-slate-200"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          name="vehicle_make"
          placeholder="Vehicle Make"
          required
          className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none"
        />
        <input
          type="text"
          name="vehicle_model"
          placeholder="Vehicle Model"
          required
          className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          name="address"
          placeholder="Address"
          required
          className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none"
        />
        <input
          type="text"
          name="postal_code"
          placeholder="Postal Code"
          required
          className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none"
        />
      </div>

      <select
        name="service_type"
        required
        className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none text-slate-700"
      >
        <option value="">Select Service</option>
        <option value="tire_change">Tire Change</option>
        <option value="punctured_tire_repair">Punctured Tire Repair</option>
        <option value="gutter_cleaning">Gutter Cleaning</option>
        <option value="fall_cleanup">Fall Cleanup</option>
        <option value="snow_plowing">Snow Plowing</option>
      </select>

      <textarea
        name="message"
        placeholder="Additional Details (optional)"
        className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none min-h-[100px]"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-[#E63946] text-white py-3 font-semibold rounded-full shadow-md hover:opacity-90 transition"
      >
        Submit Request
      </button>
    </form>
  </div>
</section>


          <footer className="border-t border-slate-200 bg-white mt-10">
            <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p>© {new Date().getFullYear()} TireBuddy. All rights reserved.</p>
                <p>Made with ❤️ in Canada. “Your Tire’s Best Friend.”</p>
              </div>
              <div className="flex items-center gap-5 text-slate-600">
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M23.498 6.186a2.997 2.997 0 00-2.112-2.119C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.386.567A2.997 2.997 0 00.502 6.186 31.8 31.8 0 000 12a31.8 31.8 0 00.502 5.814 2.997 2.997 0 002.112 2.119C4.8 20.5 12 20.5 12 20.5s7.2 0 9.386-.567a2.997 2.997 0 002.112-2.119A31.8 31.8 0 0024 12a31.8 31.8 0 00-.502-5.814zM9.75 15.02V8.98l6.25 3.02-6.25 3.02z" /></svg>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.505 0-1.796.716-1.796 1.764v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                </a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
