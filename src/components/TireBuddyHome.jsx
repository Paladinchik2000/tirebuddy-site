import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const PRIMARY_RED = "#E63946";
  const linkClass = ({ isActive }) =>
    (isActive ? "text-slate-900" : "text-slate-700") +
    " hover:text-slate-900 transition";

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo + brand */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <img
            src="https://imgur.com/a/tirebuddy-dy20SSJ"
            alt="Buddy logo"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-xl md:text-2xl font-extrabold text-slate-900">
            Tire<span className="text-slate-800">Buddy</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/blog" className={linkClass}>
            Blog
          </NavLink>
          <a
            href="/#booking"
            className="ml-2 rounded-full px-4 py-2 font-semibold text-white shadow-sm hover:shadow transition"
            style={{ background: PRIMARY_RED }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-700 focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-3">
          <NavLink to="/" className={linkClass} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <br />
          <NavLink to="/services" className={linkClass} onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
          <br />
          <NavLink to="/about" className={linkClass} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <br />
          <NavLink to="/blog" className={linkClass} onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>
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
  );
}


export default function TireBuddyHome() {
    return (
        <div className="min-h-screen bg-[#F4F4F4] text-slate-800">
            <Header />
            <NavBar />
            <Booking />
            <footer className="border-t border-slate-200 bg-white">
                <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-3">
                    <p>© {new Date().getFullYear()} TireBuddy. All rights reserved.</p>
                    <p>Made with ❤️ in Canada. “Your Tire’s Best Friend.”</p>
                </div>
            </footer>
        </div>
    )
}
