import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

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
<div className="bg-[#E63946] text-white text-sm py-1.5 md:py-2">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2 md:gap-0">
    <div className="flex items-center gap-4">
      
      {/* PHONE */}
      <span className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white md:text-black"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 16.92v3a2.06 2.06 0 01-2.27 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.11 9.9 19.79 19.79 0 010 1.27 2.05 2.05 0 012 0h3a2.06 2.06 0 012 1.72 12.84 12.84 0 00.7 2.81 2.06 2.06 0 01-.45 2.18L6.09 8.09a16 16 0 007.82 7.82l1.38-1.12a2.06 2.06 0 012.18-.45 12.84 12.84 0 002.81.7A2.06 2.06 0 0122 16.92z" />
        </svg>
        <a
          href="tel:+14374558729"
          className="hover:underline text-white md:text-black font-medium"
        >
          +1 (437) 455-8729
        </a>
      </span>

      <span className="hidden md:inline-block border-l border-white md:border-slate-300 h-4"></span>

      {/* EMAIL */}
      <span className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-white md:text-black"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22 4H2a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-10 7L2 6h20zm0 12H2V8l10 7 10-7v10z" />
        </svg>
        <a
          href="mailto:info@tirebuddy.ca"
          className="hover:underline text-white md:text-black font-medium"
        >
          info@tirebuddy.ca
        </a>
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
              src="/images/logo-buddy.png"
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
     <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}







