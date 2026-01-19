 import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative font-medium transition-all duration-300 ${
      isActive
        ? "text-primary-500"
        : "text-dark-700 hover:text-primary-500"
    } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full ${
      isActive ? "after:w-full" : ""
    }`;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 text-white text-sm py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2 md:gap-0">
          <div className="flex items-center gap-6">
            <a href="tel:+14374558729" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2.06 2.06 0 01-2.27 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.11 9.9 19.79 19.79 0 010 1.27 2.05 2.05 0 012 0h3a2.06 2.06 0 012 1.72 12.84 12.84 0 00.7 2.81 2.06 2.06 0 01-.45 2.18L6.09 8.09a16 16 0 007.82 7.82l1.38-1.12a2.06 2.06 0 012.18-.45 12.84 12.84 0 002.81.7A2.06 2.06 0 0122 16.92z" />
                </svg>
              </div>
              <span className="font-semibold">+1 (437) 455-8729</span>
            </a>

            <span className="hidden md:block w-px h-5 bg-white/30"></span>

            <a href="mailto:info@tirebuddy.ca" className="flex items-center gap-2 hover:text-white/80 transition-colors">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 4H2a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-10 7L2 6h20zm0 12H2V8l10 7 10-7v10z" />
                </svg>
              </div>
              <span className="font-semibold hidden sm:inline">info@tirebuddy.ca</span>
            </a>
          </div>

          <div className="flex items-center gap-2 font-bold tracking-wide">
            <img src="/icons/canadian-icon.png" alt="Canadian flag" className="w-6 h-6" width="24" height="24" />
            <span>PROUDLY CANADIAN</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 select-none group" onClick={closeMenu}>
            <img
              src="/images/logo-buddy.png"
              alt="TireBuddy logo"
              className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
              width="48"
              height="48"
            />
            <span className="text-2xl font-heading font-bold">
              <span className="text-dark-800">Tire</span>
              <span className="text-primary-500">Buddy</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/faq" className={linkClass}>FAQ</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            <a
              href="/#booking"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-dark-50 hover:bg-dark-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`w-6 h-0.5 bg-dark-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-dark-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-dark-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-dark-100 shadow-xl">
            <nav className="flex flex-col items-center gap-6 py-8">
              <NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink>
              <NavLink to="/services" className={linkClass} onClick={closeMenu}>Services</NavLink>
              <NavLink to="/about" className={linkClass} onClick={closeMenu}>About</NavLink>
              <NavLink to="/blog" className={linkClass} onClick={closeMenu}>Blog</NavLink>
              <NavLink to="/faq" className={linkClass} onClick={closeMenu}>FAQ</NavLink>
              <NavLink to="/contact" className={linkClass} onClick={closeMenu}>Contact</NavLink>
              <a
                href="/#booking"
                onClick={closeMenu}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg"
              >
                Book Now
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
