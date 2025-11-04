import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function TireChangePage() {
  const PRIMARY_RED = "#E63946";

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* ===== SEO TAGS ===== */}
      <Helmet>
        <title>Mobile Tire Change Service | TireBuddy Ontario</title>
        <meta
          name="description"
          content="Professional mobile tire change service across Ontario. TireBuddy comes to your home or workplace — fast, reliable, and affordable seasonal tire swaps."
        />
        <meta property="og:title" content="Mobile Tire Change Service | TireBuddy" />
        <meta
          property="og:description"
          content="TireBuddy offers professional mobile tire change services across Ontario. Starting at $89 — we come to your driveway!"
        />
        <meta property="og:image" content="/images/services/tire-change.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirebuddy.ca/services/tire-change" />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
      <div className="min-h-screen bg-[#F4F4F4] py-20 px-4">
        <div
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md border border-slate-200 p-8 md:p-12"
          data-aos="fade-up"
        >
          <h1
            className="text-4xl font-bold text-slate-900 mb-6 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            🚗 Mobile Tire Change Service
          </h1>

          <p
            className="text-slate-600 text-center mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            TireBuddy provides fast, affordable, and professional tire change
            services — we come directly to your home or workplace anywhere in the GTA.
          </p>

          {/* ===== MAIN IMAGE ===== */}
          <img
            src="/components/images/tire-change.jpg"
            alt="Mobile Tire Change Service"
            className="rounded-xl w-full mb-10 shadow-sm"
            loading="lazy"
            data-aos="zoom-in"
            data-aos-delay="300"
          />

          {/* ===== SERVICE DETAILS ===== */}
          <div className="space-y-8">
            <section data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                What’s Included
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>Seasonal tire swaps (summer/winter)</li>
                <li>Professional mobile service at your location</li>
                <li>Torque wrench tightening to manufacturer specs</li>
                <li>Tire pressure check and adjustment</li>
                <li>Inspection for tire wear or damage</li>
              </ul>
            </section>

            <section data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                Price Breakdown
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-slate-300 text-slate-700">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="border border-slate-300 px-4 py-2 text-left">
                        Vehicle Type
                      </th>
                      <th className="border border-slate-300 px-4 py-2 text-left">
                        Price
                      </th>
                      <th className="border border-slate-300 px-4 py-2 text-left">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-4 py-2">
                        Sedan / Coupe
                      </td>
                      <td className="border border-slate-300 px-4 py-2 font-bold text-[#E63946]">
                        $89 – $110
                      </td>
                      <td className="border border-slate-300 px-4 py-2">
                        Standard tire swap, done on-site in your driveway or garage.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-2">
                        SUV / Crossover
                      </td>
                      <td className="border border-slate-300 px-4 py-2 font-bold text-[#E63946]">
                        $110 – $130
                      </td>
                      <td className="border border-slate-300 px-4 py-2">
                        Includes full torque check and tire pressure adjustment.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-4 py-2">
                        Pickup Truck / Van
                      </td>
                      <td className="border border-slate-300 px-4 py-2 font-bold text-[#E63946]">
                        $130 – $160
                      </td>
                      <td className="border border-slate-300 px-4 py-2">
                        Heavy-duty tire change, ideal for larger vehicles.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                What You Can Expect
              </h2>
              <ul className="list-disc list-inside text-slate-700 space-y-2">
                <li>We come to your home, condo, or workplace — no waiting in line.</li>
                <li>Professional technicians with full equipment and tools.</li>
                <li>Fast and friendly service — most jobs done within 30–45 minutes.</li>
                <li>We double-check all lug nuts with a calibrated torque wrench.</li>
              </ul>
            </section>

            <section data-aos="fade-up" data-aos-delay="500">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                Final Price
              </h2>
              <p className="text-slate-700">
                The total cost may vary depending on your location, vehicle type, and
                accessibility (e.g., underground parking or steep driveways).
              </p>
            </section>

            <section data-aos="fade-up" data-aos-delay="600">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                Note
              </h2>
              <p className="text-slate-700">
                We recommend scheduling your appointment early in the season to
                ensure timely service — especially before the first snowfalls.
              </p>
            </section>
          </div>

          {/* ===== CTA BUTTON ===== */}
          <div className="text-center mt-12" data-aos="zoom-in" data-aos-delay="700">
            <a
              href="/#booking"
              className="inline-block px-8 py-3 rounded-full text-white font-semibold shadow hover:shadow-lg transition"
              style={{ background: PRIMARY_RED }}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
