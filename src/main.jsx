import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Layout from "./components/Layout";
import TireBuddyHome from "./components/TireBuddyHome";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import BlogPage from "./components/BlogPage";
import ContactPage from "./components/ContactPage";
import FaqPage from "./components/FaqPage";
import ScrollToTop from "./components/ScrollToTop";
import ThankYouPage from "./components/ThankYouPage";

//  новая страница
import FallCleanupPage from "./components/services/FallCleanupPage";
import TireChangePage from "./components/services/TireChangePage";
import SnowShovelingPage from "./components/services/SnowShovelingPage";

// блоги страниц
import SnowShovelingBeforeWeArrive from "./components/SnowShovelingBeforeWeArrive";
import TireChangePrepBlog from "./components/TireChangePrepBlog";
import WinterTiresWhenBlog from "./components/WinterTiresWhenBlog";
import TireSafetySignsBlog from "./components/blog/TireSafetySignsBlog";
import WinterVsAllSeasonBlog from "./components/blog/WinterVsAllSeasonBlog";
import ChoosingRightTiresBlog from "./components/blog/ChoosingRightTiresBlog";
import TireStorageGuideBlog from "./components/blog/TireStorageGuideBlog";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
         <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TireBuddyHome />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="thank-you" element={<ThankYouPage />} />

            {/*  Страница услуг */}
            <Route path="services/fall-cleanup" element={<FallCleanupPage />} />
            <Route path="services/tire-change" element={<TireChangePage />} />
            <Route path="services/snow-shoveling" element={<SnowShovelingPage />} />

            {/*  Страница блогов */}
            <Route path="blog/tire-safety-warning-signs" element={<TireSafetySignsBlog />} />
            <Route path="blog/winter-vs-all-season-tires" element={<WinterVsAllSeasonBlog />} />
            <Route path="blog/snow-shoveling-before-we-arrive" element={<SnowShovelingBeforeWeArrive />} />
            <Route path="blog/mobile-tire-change-ontario" element={<TireChangePrepBlog />} />
            <Route path="blog/when-to-switch-to-winter-tires-ontario" element={<WinterTiresWhenBlog />} />
            <Route path="blog/choosing-right-tires-ontario" element={<ChoosingRightTiresBlog />} />
            <Route path="blog/tire-storage-guide-canada" element={<TireStorageGuideBlog />} />

            {/*  Страница 404 (fallback) */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center h-screen text-center text-slate-700">
                  <h1 className="text-4xl font-bold mb-3">404 - Page Not Found</h1>
                  <p className="text-lg mb-6">
                    Oops! The page you're looking for doesn't exist.
                  </p>
                  <Link
                    to="/"
                    className="px-5 py-2 rounded-full bg-[#E63946] text-white font-semibold hover:opacity-90 transition"
                  >
                    Go Home
                  </Link>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
