import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const PRIMARY_RED = "#E63946";

  const linkClass = ({ isActive }) =>
    (isActive ? "text-slate-900" : "text-slate-700") +
    " hover:text-slate-900 transition";

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      {/* ===== TOP CONTACT BAR ===== */}
      <div className="bg-[#E63946] text-white text-sm py-2">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2 md:gap-0">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              📞 <a href="tel:+14374558729" className="hover:underline">+1 (437) 455-8729</a>
            </span>
            <span className="hidden md:inline-block border-l border-white h-4"></span>
            <span className="flex items-center gap-1">
              ✉️ <a href="mailto:info@tirebuddy.ca" className="hover:underline">info@tirebuddy.ca</a>
            </span>
          </div>
          <div className="uppercase tracking-wide font-semibold text-xs md:text-sm">
            🇨🇦 Proudly Canadian
          </div>
        </div>
      </div>

      {/* ===== MAIN HEADER ===== */}
      <header className="sticky top-0 z-30 bg-white shadow-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-2 select-none" onClick={closeMenu}>
            <img
              src="https://i.imgur.com/4YFSmoN.png"
              alt="Buddy logo"
              className="h-10 w-10"
            />
            <span className="text-2xl font-extrabold text-slate-900">
              Tire<span className="text-slate-800">Buddy</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            <a
              href="/#booking"
              className="ml-2 rounded-full px-4 py-2 font-semibold text-white shadow-sm hover:shadow transition"
              style={{ background: PRIMARY_RED }}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-slate-800 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-slate-800 transition-all ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-slate-800 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-md">
            <nav className="flex flex-col items-center gap-4 py-6 text-lg">
              <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
              <NavLink to="/services" className={linkClass} onClick={closeMenu}>Services</NavLink>
              <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
              <NavLink to="/blog" className={linkClass} onClick={closeMenu}>Blog</NavLink>
              <NavLink to="/faq" className={linkClass} onClick={closeMenu}>FAQ</NavLink>
              <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>
              <a
                href="/#booking"
                onClick={closeMenu}
                className="rounded-full px-6 py-2 font-semibold text-white shadow-sm hover:shadow transition"
                style={{ background: PRIMARY_RED }}
              >
                Book Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}









