import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// ====== Pages ======
import TireBuddyHome from "./components/TireBuddyHome";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";

// ====== Service Detail Pages ======
import FallCleanupPage from "./pages/services/FallCleanup";

export default function App() {
  return (
    <Routes>
      {/* Layout (header + footer) */}
      <Route path="/" element={<Layout />}>
        {/* Главная */}
        <Route index element={<TireBuddyHome />} />

        {/* Основные страницы */}
        <Route path="services" element={<ServicesPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Страница конкретного сервиса */}
        <Route path="services/fall-cleanup" element={<FallCleanupPage />} />

        {/* Резерв: 404 страница */}
        <Route
          path="*"
          element={
            <div className="flex flex-col items-center justify-center h-screen text-center text-slate-700">
              <h1 className="text-4xl font-bold mb-3">404 - Page Not Found</h1>
              <p className="text-lg mb-6">
                Oops! The page you’re looking for doesn’t exist.
              </p>
              <a
                href="/"
                className="px-5 py-2 rounded-full bg-[#E63946] text-white font-semibold hover:opacity-90 transition"
              >
                Go Home
              </a>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

