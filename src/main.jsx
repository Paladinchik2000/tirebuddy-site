import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./components/Layout";
import TireBuddyHome from "./components/TireBuddyHome";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import FaqPage from "./components/FaqPage";
import ScrollToTop from "./components/ScrollToTop";

//  новая страница
import FallCleanupPage from "./components/services/FallCleanupPage";
import TireChangePage from "./components/services/TireChangePage";
import SnowShovelingPage from "./components/services/SnowShovelingPage";


import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TireBuddyHome />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FaqPage />} />

            {/*  Страница услуг */}
            <Route path="services/fall-cleanup" element={<FallCleanupPage />} />
            <Route path="services/tire-change" element={<TireChangePage />} />
            <Route path="services/snow-shoveling" element={<SnowShovelingPage />} />


            {/*  Страница 404 (fallback) */}
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
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
