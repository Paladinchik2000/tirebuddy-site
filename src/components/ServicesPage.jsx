import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ServicesPage() {
  const PRIMARY_RED = "#E63946";

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  // ===== функция плавного скролла =====
  const scrollToBooking = () => {
    const bookingSection = document.querySelector("#booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#booking"; // fallback если пользователь не на главной
    }
  };

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
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From seasonal cleanup to tire change — TireBuddy keeps your home and
            vehicle ready for any season.
          </p>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="flex flex-col items-center gap-12">
          
          {/* ===== MOBILE TIRE CHANGE CARD ===== */}
          <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1 border border-slate-200 max-w-3xl w-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/images/service-tire-change.jpg"
              alt="Mobile Tire Change"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                🚗 Mobile Tire Change
              </h2>
              <p className="text-slate-600 mb-4">
                Fast, reliable, and professional tire change service — done right
                at your home or workplace.
              </p>
              <p className="text-3xl font-extrabold text-[#E63946] mb-6">
                Starting at $89
              </p>

              <div className="flex justify-center gap-4">
                {/* Плавная прокрутка к форме */}
                <button
                  onClick={scrollToBooking}
                  className="px-6 py-2 rounded-full text-white font-semibold shadow hover:shadow-lg transition"
                  style={{ background: PRIMARY_RED }}
                >
                  Book Now
                </button>

                <Link
                  to="/services/tire-change"
                  className="px-6 py-2 rounded-full font-semibold border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

           {/* ===== SNOW SHOVELING CARD ===== */}
          <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1 border border-slate-200 max-w-3xl w-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="/images/snow-shoveling.jpg"
              alt="Snow Shoveling"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                ❄️ Snow Shoveling
              </h2>
              <p className="text-slate-600 mb-4">
                Keep your yard clean and safe this winter with our professional
                 snow shoveling service — quick, efficient, and
                affordable.
              </p>
              <p className="text-3xl font-extrabold text-[#E63946] mb-6">
                Starting at $80
              </p>

              <div className="flex justify-center gap-4">
                {/* Плавная прокрутка к форме */}
                <button
                  onClick={scrollToBooking}
                  className="px-6 py-2 rounded-full text-white font-semibold shadow hover:shadow-lg transition"
                  style={{ background: PRIMARY_RED }}
                >
                  Book Now
                </button>

                <Link
                  to="/services/snow-shoveling"
                  className="px-6 py-2 rounded-full font-semibold border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* ===== FALL CLEANUP CARD ===== */}
          <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1 border border-slate-200 max-w-3xl w-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="/images/service-fall-cleanup.jpg"
              alt="Fall Cleanup"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                🍂 Fall Cleanup
              </h2>
              <p className="text-slate-600 mb-4">
                Keep your yard clean and safe this fall with our professional
                leaf and debris cleanup service — quick, efficient, and
                affordable.
              </p>
              <p className="text-3xl font-extrabold text-[#E63946] mb-6">
                Starting at $170
              </p>

              <div className="flex justify-center gap-4">
                {/* Плавная прокрутка к форме */}
                <button
                  onClick={scrollToBooking}
                  className="px-6 py-2 rounded-full text-white font-semibold shadow hover:shadow-lg transition"
                  style={{ background: PRIMARY_RED }}
                >
                  Book Now
                </button>

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
      </div>
    </>
  );
}
