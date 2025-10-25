import { Link, NavLink, Outlet } from "react-router-dom";
import BuddyWink from "./BuddyWink"; // 👈 добавлено

export default function Layout() {
  const PRIMARY_RED = "#E63946";
  const linkClass = ({ isActive }) =>
    (isActive ? "text-slate-900" : "text-slate-700") +
    " hover:text-slate-900 transition";

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-30 bg-white shadow-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 select-none">
            <img
              src="https://i.imgur.com/4YFSmoN.png"
              alt="Buddy logo"
              className="h-10 w-10"
            />
            <span className="text-2xl font-extrabold text-slate-900">
              Tire<span className="text-slate-800">Buddy</span>
            </span>

            {/* 👇 Пасхалка — Buddy моргает каждые 6 секунд */}
            <BuddyWink size={32} />
          </Link>

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
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p>© {new Date().getFullYear()} TireBuddy. All rights reserved.</p>
            <p>Made with ❤️ in Canada. “Your Tire’s Best Friend.”</p>
          </div>
          <div className="flex items-center gap-5 text-slate-600">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M23.498 6.186a2.997 2.997 0 00-2.112-2.119C19.2 3.5 12 3.5 12 3.5s-7.2 0-9.386.567A2.997 2.997 0 00.502 6.186 31.8 31.8 0 000 12a31.8 31.8 0 00.502 5.814 2.997 2.997 0 002.112 2.119C4.8 20.5 12 20.5 12 20.5s7.2 0 9.386-.567a2.997 2.997 0 002.112-2.119A31.8 31.8 0 0024 12a31.8 31.8 0 00-.502-5.814zM9.75 15.02V8.98l6.25 3.02-6.25 3.02z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-6 w-6"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.918c-1.505 0-1.796.716-1.796 1.764v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}



