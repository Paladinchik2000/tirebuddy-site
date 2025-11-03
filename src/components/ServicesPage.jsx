import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ServicesPage() {
  const PRIMARY_RED = "#E63946";

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <>
      {/* ===== SEO ===== */}
      <Helmet>
        <title>Our Services | TireBuddy</title>
        <meta
          name="description"
          content="Explore TireBuddy’s professional mobile services — tire change, repair, seasonal cleanup, and snow removal across Ontario."
        />
      </Helmet>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-slate-700">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From seasonal cleanup to tire change — TireBuddy keeps your home and vehicle ready for any season.
          </p>
        </div>

        {/* ===== FALL CLEANUP CARD ===== */}
        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1 border border-slate-200 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          <img
            src="https://i.imgur.com/UZybBYI.jpeg"
            alt="Fall Cleanup"
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              🍂 Fall Cleanup
            </h2>
            <p className="text-slate-600 mb-4">
              Keep your yard clean and safe this fall with our professional leaf and debris cleanup service — quick, efficient, and affordable.
            </p>
            <p className="text-3xl font-extrabold text-[#E63946] mb-6">
              Starting at $170
            </p>

            <div className="flex justify-center gap-4">
              {/* BOOK NOW (якорь на форму) */}
              <a
                href="/#booking"
                className="px-6 py-2 rounded-full text-white font-semibold shadow hover:shadow-lg transition"
                style={{ background: PRIMARY_RED }}
              >
                Book Now
              </a>

              {/* READ MORE (переход на отдельную страницу Fall Cleanup) */}
              <Link
                to="/services/fall-cleanup"
                className="px-6 py-2 rounded-full font-semibold border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





