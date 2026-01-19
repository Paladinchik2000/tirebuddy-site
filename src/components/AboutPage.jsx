import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutPage() {
  const PRIMARY_RED = "#E63946";

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  return (
    <>
      {/* ===== SEO TAGS ===== */}
      <Helmet>
        <title>About TireBuddy | Mobile Tire Experts in Ontario</title>
        <meta
          name="description"
          content="Learn more about TireBuddy — Ontario’s trusted mobile tire change and repair service. Proudly Canadian, fast, and customer-focused!"
        />
        <meta property="og:title" content="About TireBuddy – Proudly Canadian Mobile Tire Service" />
        <meta
          property="og:description"
          content="TireBuddy is a 100% Canadian mobile tire service offering fast, friendly, and reliable seasonal tire change and repair across Ontario."
        />
        <meta property="og:image" content="/images/logo-buddy.png" />
        <meta property="og:url" content="https://tirebuddy.ca/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* ===== HERO ===== */}
      <section
        className="relative flex flex-col justify-center items-center text-center text-white h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/tire-about1.JPG')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About TireBuddy
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto">
            Proudly Canadian. Locally owned. Driven by quality, reliability, and care.
          </p>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-slate-700">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Your Tire’s Best Friend — TireBuddy 
            </h2>
            <p className="mb-4">
              TireBuddy was created with one goal in mind — to make tire change
              and seasonal car maintenance simple, transparent, and stress-free.
              Our friendly technicians come to <strong>your home, condo, or workplace</strong>,
              bringing everything needed for a fast, professional job.
            </p>
            <p>
              We’re proud to serve the <strong>Greater Toronto Area</strong> and surrounding
              regions with quality workmanship and true Canadian service values —
              honesty, reliability, and care for every customer.
            </p>
          </div>

          {/* Mascot / Logo card */}
          <div
            className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden text-center"
            data-aos="fade-left"
          >
            <img
              src="/images/logo-buddy.png"
              alt="TireBuddy Mascot"
              className="w-full h-64 object-contain p-6"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                “Your Tire’s Best Friend.”
              </h3>
              <p className="text-slate-600">
                Always ready to roll — wherever you are in Ontario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="bg-[#F9FAFB] border-y border-slate-200 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Why Choose TireBuddy?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
              data-aos="zoom-in"
            >
              <div className="flex items-center gap-2 mb-2">
                <img src="/icons/mobile-service-icon.png" alt="" className="w-8 h-8" />
                <h3 className="text-xl font-semibold text-slate-900">Mobile Convenience</h3>
              </div>
              <p className="text-slate-600">
                We come to you — driveway, condo, or workplace. No more lineups or waiting rooms.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="flex items-center gap-2 mb-2">
                <img src="/icons/tools-icon.png" alt="" className="w-8 h-8" />
                <h3 className="text-xl font-semibold text-slate-900">Professional Service</h3>
              </div>
              <p className="text-slate-600">
                Certified technicians equipped with modern tools and a commitment to safety.
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="flex items-center gap-2 mb-2">
                <img src="/icons/canadian-icon.png" alt="" className="w-8 h-8" />
                <h3 className="text-xl font-semibold text-slate-900">Proudly Canadian</h3>
              </div>
              <p className="text-slate-600">
                Local business supporting Ontario communities with top-tier service and care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHOTO GALLERY ===== */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2
          className="text-3xl font-bold text-center text-slate-900 mb-10"
          data-aos="fade-up"
        >
          Our Work in Action
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            data-aos="fade-right"
          >
            <img
              src="/images/R6__5820.jpg"
              alt="Tire change in progress"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
          </div>
          <div
            className="rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            data-aos="fade-left"
          >
            <img
              src="/images/R6__5833.jpg"
              alt="TireBuddy service van"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
             </div>
          <div
            className="rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            data-aos="fade-left"
          >
            <img
              src="/images/tire-change3.jpg"
              alt="TireBuddy service van"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
             </div>
          <div
            className="rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            data-aos="fade-left"
          >
            <img
              src="/images/tire-change4.JPG"
              alt="TireBuddy service van"
              className="w-full h-72 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="bg-white border-t border-slate-200 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah P.",
                review:
                  "Absolutely loved the service! The team came right to my driveway, changed all 4 tires, and cleaned up after. Super friendly and fast!",
              },
              {
                name: "Jason M.",
                review:
                  "Booked online, and they were at my place the next day. Very professional and transparent — no hidden fees. Highly recommend!",
              },
              {
                name: "Emily R.",
                review:
                  "TireBuddy saved my morning! Got a flat before work, they came in 30 minutes and fixed it right on the spot. 5/5 stars!",
              },
            ].map((r, i) => (
              <div
                key={r.name}
                className="bg-[#F9FAFB] rounded-2xl p-6 shadow-sm border border-slate-200 text-left"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400 text-lg mr-2">★★★★★</div>
                  <span className="text-slate-900 font-semibold">{r.name}</span>
                </div>
                <p className="text-slate-700">{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


