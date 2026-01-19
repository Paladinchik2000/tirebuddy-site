import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function FallCleanupPage() {
  const PRIMARY_RED = "#E63946";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // ===== Smooth scroll to booking section =====
  const scrollToBooking = () => {
    const bookingSection = document.querySelector("#booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#booking"; // fallback для других страниц
    }
  };

  return (
    <>
      {/* ===== SEO TAGS ===== */}
      <Helmet>
        <title>Fall Clean-Up Service | TireBuddy Ontario</title>
        <meta
          name="description"
          content="Professional fall yard clean-up across the GTA. 2-person crew, raking, trimming, leaf blowing, and debris removal. Get your property ready for winter with TireBuddy."
        />
        <meta property="og:title" content="TireBuddy Fall Clean-Up Service" />
        <meta
          property="og:description"
          content="Reliable fall yard clean-up across the GTA by a 2-person crew. Raking, trimming, leaf blowing, and full seasonal yard maintenance."
        />
        <meta property="og:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirebuddy.ca/services/fall-cleanup" />
        <link rel="canonical" href="https://tirebuddy.ca/services/fall-cleanup" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fall Clean-Up Service | TireBuddy Ontario" />
        <meta name="twitter:description" content="Professional fall yard clean-up across the GTA. Starting at $170 — raking, trimming, and debris removal." />
        <meta name="twitter:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
      </Helmet>

      {/* ===== PAGE HEADER ===== */}
      <section
        className="relative flex flex-col justify-center items-center text-center text-white h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/UZybBYI.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Fall Clean-Up Service (2-Person Crew)
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-6">
            Reliable fall yard clean-up across the GTA — keeping your property neat,
            safe, and ready for winter.
          </p>

          {/* === BOOK BUTTON with smooth scroll === */}
          <button
            onClick={scrollToBooking}
            className="inline-block px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ background: PRIMARY_RED }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Book Fall Clean-Up
          </button>
        </div>
      </section>

      {/* ===== SERVICE DETAILS ===== */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-slate-700 leading-relaxed">
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg mb-6">
            We offer <strong>reliable fall yard clean-up services across the GTA</strong>,
            perfect for keeping your property neat and ready for winter. All work is
            completed by a{" "}
            <strong>2-person team</strong> using professional equipment — rakes,
            trimmers, and leaf blowers.
          </p>

          <hr className="my-8 border-slate-300" />

          {/* ===== INCLUDED ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What’s Included</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Raking and collecting leaves, branches, and yard debris</li>
            <li>Trimming small plants and bushes</li>
            <li>Leaf blowing to clear driveways, walkways, and lawns</li>
            <li>Bagging all leaves and debris neatly in yard waste bags</li>
          </ul>
          <p className="mt-4 text-slate-600">
            <em>Bags are left on the property, typically near the curb or wherever the client requests.</em>
          </p>

          <hr className="my-8 border-slate-300" />

          {/* ===== DURATION ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Duration</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Small Property: about 1.5–2 hours</li>
            <li>Medium Property: about 2–3 hours</li>
            <li>Large Property: about 5 hours or more, depending on size and layout</li>
          </ul>

          <hr className="my-8 border-slate-300" />

          {/* ===== PRICING ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Pricing by Property Size</h2>
          <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay="150">
            <table className="w-full text-left border border-slate-300 rounded-lg overflow-hidden">
              <thead className="bg-[#E63946] text-white">
                <tr>
                  <th className="py-3 px-4">Property Size</th>
                  <th className="py-3 px-4">Price Range</th>
                  <th className="py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  {
                    size: "Small (Townhouse or Small Lot)",
                    price: "$170 – $250",
                    desc: "Light clean-up, few trees, leaves and branches bagged and left on-site.",
                  },
                  {
                    size: "Medium (Detached Home, Average Lot)",
                    price: "$300 – $400",
                    desc: "Full front & backyard cleaning, raking, trimming, and leaf blowing.",
                  },
                  {
                    size: "Large (Big Lot, Many Trees)",
                    price: "Starting at $600+",
                    desc: "Complete clean-up with leaf blowing, trimming, and full yard detailing.",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.size}
                    className="border-t border-slate-200 hover:bg-red-50 transition"
                    data-aos="fade-up"
                    data-aos-delay={200 + i * 100}
                  >
                    <td className="py-3 px-4 font-semibold">{row.size}</td>
                    <td className="py-3 px-4 text-[#E63946] font-bold">{row.price}</td>
                    <td className="py-3 px-4">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="my-8 border-slate-300" />

          {/* ===== EXPECTATIONS ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What You Can Expect</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Two workers arrive on time with all necessary tools.</li>
            <li>We perform complete yard clean-up — raking, trimming, and blowing leaves.</li>
            <li>All bags stay on your property, neatly placed near the curb or as you request.</li>
            <li>Your yard will be left tidy and ready for winter.</li>
          </ul>

          <hr className="my-8 border-slate-300" />

          {/* ===== FINAL PRICE ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Final Price</h2>
          <p>
            The final cost is determined after evaluating your property’s{" "}
            <strong>location, size, and complexity</strong>. Contact us for an
            accurate quote — our team will assess and confirm before starting
            the job.
          </p>

          <hr className="my-8 border-slate-300" />

          {/* ===== NOTE ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Note</h2>
          <p className="mb-6">
            We recommend scheduling your fall clean-up{" "}
            <strong>
              one day before your city’s leaf or yard waste collection day
            </strong>
            . This way, the city can conveniently pick up your bags the next
            morning.
          </p>

          {/* ===== CTA BUTTON ===== */}
          <div className="text-center mt-10" data-aos="zoom-in" data-aos-delay="300">
            <button
              onClick={scrollToBooking}
              className="inline-block px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ background: PRIMARY_RED }}
            >
              Book Fall Clean-Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}


