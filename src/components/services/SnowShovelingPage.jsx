import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SnowShovelingPage() {
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
      window.location.href = "/#booking"; // fallback for other pages
    }
  };

  return (
    <>
      {/* ===== SEO TAGS ===== */}
      <Helmet>
        <title>Snow Shoveling Service | TireBuddy Ontario</title>
        <meta
          name="description"
          content="Professional snow shoveling across the GTA by a 2-person crew. TireBuddy comes to your home — fast, reliable, and affordable."
        />
        <meta property="og:title" content="TireBuddy Snow Shoveling Service" />
        <meta
          property="og:description"
          content="TireBuddy offers professional, fast and reliable snow shoveling services across York, North York, Vaughan, Toronto, and Etobicoke. Starting at $80 — we come to your driveway!"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/NAfLl2q.jpeg"
        />
        <meta property="og:type" content="service" />
        <meta
          property="og:url"
          content="https://tirebuddy.ca/services/snow-shoveling"
        />
      </Helmet>

      {/* ===== PAGE HEADER ===== */}
      <section
        className="relative flex flex-col justify-center items-center text-center text-white h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.imgur.com/NAfLl2q.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Snow Shoveling Service (1–2 Professional Technicians)
          </h1>
          <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto mb-6">
            Reliable winter clean-up across the <strong>GTA</strong> — keeping
            your property clean and safe.
          </p>

          {/* === BOOK BUTTON with smooth scroll === */}
          <button
            onClick={scrollToBooking}
            className="inline-block px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ background: PRIMARY_RED }}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            ❄️ Book Snow Shoveling
          </button>
        </div>
      </section>

      {/* ===== SERVICE DETAILS ===== */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-slate-700 leading-relaxed">
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg mb-6">
            We offer{" "}
            <strong>fast and reliable snow shoveling services across the GTA</strong>,
            perfect for keeping your property safe and clean during winter. All
            work is completed by a{" "}
            <strong>1–2 person team</strong> using professional equipment. Our
            team arrives early in the morning after snowfall or in the evening —
            depending on your preference and schedule.
          </p>

          <hr className="my-8 border-slate-300" />

          {/* ===== INCLUDED ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            What’s Included
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Manual snow shoveling</strong> (no heavy machines — safe
              for your interlock or asphalt)
            </li>
            <li>
              <strong>Pathway, driveway, and walkway clearing</strong>
            </li>
            <li>
              <strong>Two salt options available:</strong>
            </li>
            <li>Standard salt</li>
            <li>Pet-friendly salt (safe for pets)</li>
          </ul>
          <p className="mt-4 text-slate-600">
            🟤 <em>Fully equipped to clean your driveway and sidewalks.</em>
          </p>

          <hr className="my-8 border-slate-300" />

          {/* ===== DURATION ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Service Duration
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Each job takes about 45 minutes to 1.5 hours, depending on the
              amount of snow and property size.
            </li>
          </ul>

          <hr className="my-8 border-slate-300" />

          {/* ===== PRICING ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Pricing by Property Size
          </h2>
          <div
            className="overflow-x-auto"
            data-aos="fade-up"
            data-aos-delay="150"
          >
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
                    size: "Small Property",
                    price: "Starting at $80",
                    desc: "Townhouse or small driveway.",
                  },
                  {
                    size: "Medium Property",
                    price: "Starting at $120",
                    desc: "Standard detached home.",
                  },
                  {
                    size: "Large Property",
                    price: "Starting at $160",
                    desc: "Big house or wide driveway.",
                  },
                  {
                    size: "Heavy Storm",
                    price: "+ $40",
                    desc: "Extra charge during large snowfalls.",
                  },
                  {
                    size: "Specific Time Request",
                    price: "+ $60",
                    desc: "Guaranteed clearing by a specific time (arranged by phone).",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.size}
                    className="border-t border-slate-200 hover:bg-red-50 transition"
                    data-aos="fade-up"
                    data-aos-delay={200 + i * 100}
                  >
                    <td className="py-3 px-4 font-semibold">{row.size}</td>
                    <td className="py-3 px-4 text-[#E63946] font-bold">
                      {row.price}
                    </td>
                    <td className="py-3 px-4">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="my-8 border-slate-300" />

          {/* ===== EXPECTATIONS ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            What You Can Expect
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Step 1:</strong> Submit a booking form or call us
              directly.
            </li>
            <li>
              <strong>Step 2:</strong> Our manager confirms your location and
              preferred cleaning time.
            </li>
            <li>
              <strong>Step 3:</strong> Our team arrives on time — morning after
              snowfall or evening, as agreed.
            </li>
            <li>
              <strong>Step 4:</strong> We clean snow carefully using shovels to
              protect your interlock or asphalt.
            </li>
            <li>
              <strong>Step 5:</strong> We apply salt (regular or pet-friendly,
              your choice).
            </li>
            <li>
              <strong>Step 6:</strong> You inspect the result and pay once
              everything is complete.
            </li>
          </ul>

          <hr className="my-8 border-slate-300" />

          {/* ===== COMPETITIVE PRICING ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Competitive Pricing
          </h2>
          <p className="mb-4">
            The final cost is determined after evaluating your property’s{" "}
            <strong>location, size, and complexity</strong>. Contact us for an
            accurate quote — our team will assess and confirm before starting
            the job.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>
              💰 <strong>Super value for money</strong> — top-quality mobile
              service at the best price in the GTA.
            </li>
            <li>
              👴 <strong>10% Seniors Discount</strong> — because experience
              deserves appreciation.
            </li>
          </ul>

          <hr className="my-8 border-slate-300" />

          {/* ===== NOTE ===== */}
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Note</h2>
          <p className="mb-6">
            We also handle{" "}
            <strong>
              large and commercial properties — including plazas, offices, and
              government buildings.
            </strong>
          </p>

          {/* ===== CTA BUTTON ===== */}
          <div
            className="text-center mt-10"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <button
              onClick={scrollToBooking}
              className="inline-block px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
              style={{ background: PRIMARY_RED }}
            >
              ❄️ Book Snow Shoveling
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

