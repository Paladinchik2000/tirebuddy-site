import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function TirePunctureRepairPage() {
  const PRIMARY_RED = "#E63946";

  useEffect(() => {
    const isBot = /bot|googlebot|crawler|spider|robot|crawling|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|facebookexternalhit|Twitterbot|LinkedInBot/i.test(navigator.userAgent);
    AOS.init({ duration: isBot ? 0 : 800, easing: "ease-out-cubic", once: true, disable: isBot });
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.querySelector("#booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#booking";
    }
  };

  return (
    <>
      {/* ===== SEO TAGS ===== */}
      <Helmet>
        <title>Tire Puncture Repair Service | TireBuddy Ontario</title>
        <meta
          name="description"
          content="Got a flat or punctured tire in Toronto, Mississauga, or Brampton? TireBuddy comes to you for fast, affordable on-site tire puncture repair — just $60. Book online in 60 seconds."
        />
        <meta property="og:title" content="TireBuddy Tire Puncture Repair — On-Site" />
        <meta
          property="og:description"
          content="TireBuddy offers professional mobile tire puncture repair across Ontario. Only $60 — we come to your location!"
        />
        <meta property="og:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirebuddy.ca/services/tire-puncture-repair" />
        <link rel="canonical" href="https://tirebuddy.ca/services/tire-puncture-repair" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tire Puncture Repair Service | TireBuddy Ontario" />
        <meta name="twitter:description" content="Fast on-site tire puncture repair across the GTA. Only $60 — we come to you!" />
        <meta name="twitter:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
      </Helmet>

      {/* ===== PAGE HEADER ===== */}
      <section
        className="relative flex flex-col justify-center items-center text-center text-white h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/V5pLxHA.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-55"></div>
        <div className="relative z-10 px-6" data-aos="fade-up">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Tire Puncture Repair — We Come To You!
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-6">
            Got a flat? Don't stress — TireBuddy fixes it on the spot, anywhere in the <strong>GTA</strong>.
          </p>
          <button
            onClick={scrollToBooking}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ background: PRIMARY_RED }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src="/icons/tire-change-icon.png" alt="" className="w-6 h-6" /> Book Puncture Repair
          </button>
        </div>
      </section>

      {/* ===== SERVICE DETAILS ===== */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-slate-700 leading-relaxed">
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg mb-6">
            TireBuddy provides{" "}
            <strong>fast, affordable, and professional tire puncture repair</strong>.
            We come directly to your home, workplace, or condo parking anywhere in the GTA. All
            work is completed by a{" "}
            <strong>technician using professional patching equipment.</strong>
          </p>

          <hr className="my-8 border-slate-300" />

          {/* ===== INCLUDED ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>On-site tire puncture inspection</strong>
            </li>
            <li>Nail, screw, or debris removal from the tire</li>
            <li>Professional patch or plug repair</li>
            <li>Tire pressure check and re-inflation to manufacturer specs</li>
            <li>Visual check for sidewall or irreparable damage</li>
          </ul>
          <p className="mt-4 text-slate-600 flex items-center gap-2">
            <img src="/icons/tools-icon.png" alt="" className="w-5 h-5" /> <em>Fully equipped to diagnose and repair your punctured tire on the spot — no tow truck needed.</em>
          </p>

          <hr className="my-8 border-slate-300" />

          {/* ===== PRICING ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Price Breakdown</h2>
          <div className="overflow-x-auto" data-aos="fade-up" data-aos-delay="150">
            <table className="w-full text-left border border-slate-300 rounded-lg overflow-hidden">
              <thead className="bg-[#E63946] text-white">
                <tr>
                  <th className="py-3 px-4">Service</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                {[
                  {
                    size: "Tire Puncture Repair",
                    price: "$60",
                    desc: "Flat rate for any passenger car, SUV, crossover, pickup truck, or van.",
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

          {/* ===== COMPETITIVE PRICING ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Competitive Pricing</h2>
          <p className="mb-4">
            At <strong>TireBuddy</strong>, we believe in providing exceptional service at honest, affordable rates.
            Our flat $60 repair fee covers everything — no hidden charges, no shop markup, just transparent pricing delivered to your door.
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex items-center gap-3">
              <img src="/icons/value-icon.png" alt="" className="w-6 h-6" />
              <span><strong>Super value for money</strong> — professional on-site repair for less than most shop quotes.</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/icons/seniors-icon.png" alt="" className="w-6 h-6" />
              <span><strong>10% Seniors Discount</strong> — because experience deserves appreciation.</span>
            </li>
            <li className="flex items-center gap-3">
              <img src="/icons/multi-vehicle-icon.png" alt="" className="w-6 h-6" />
              <span><strong>Multi-Vehicle Savings:</strong> every next car gets a <strong>$20 OFF</strong> discount!</span>
            </li>
          </ul>
          <p>
            The repair is only possible if the puncture is in the{" "}
            <strong>
              tread area and the damage is 6mm (1/4 inch) or smaller
            </strong>.
            If the tire is irreparable (sidewall damage, large tear, or bead damage), we'll let you know upfront — no charge for the diagnosis.
            Contact us for an accurate assessment before booking.
          </p>

          <hr className="my-8 border-slate-300" />

          {/* ===== NOTE ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Note</h2>
          <p className="mb-6">
            Not all punctures can be repaired.{" "}
            <strong>
              If the damage is on the sidewall or the puncture is too large, a tire replacement may be required.
            </strong>{" "}
            Our technician will inspect the tire first and advise you on the best course of action — completely free of charge if the tire cannot be repaired.
          </p>

          {/* ===== CTA BUTTON ===== */}
          <div className="text-center mt-10" data-aos="zoom-in" data-aos-delay="300">
            <button
              onClick={scrollToBooking}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ background: PRIMARY_RED }}
            >
              <img src="/icons/tire-change-icon.png" alt="" className="w-6 h-6" /> Book Puncture Repair
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
