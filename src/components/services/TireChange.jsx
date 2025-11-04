import { Helmet } from "react-helmet-async";

export default function TireChangePage() {
  const PRIMARY_RED = "#E63946";

  return (
    <>
      <Helmet>
        <title>Mobile Tire Change in Ontario | TireBuddy</title>
        <meta
          name="description"
          content="Fast, professional mobile tire change service across Ontario. TireBuddy comes directly to your home or workplace — saving you time and hassle."
        />
        <meta property="og:title" content="Mobile Tire Change by TireBuddy" />
        <meta
          property="og:description"
          content="Book your on-site tire change anywhere in Ontario. We come to you with full equipment and friendly service."
        />
        <meta property="og:image" content="/images/services/tire-change.jpg" />
        <meta property="og:url" content="https://tirebuddy.ca/services/tire-change" />
      </Helmet>

      <div className="bg-[#F9FAFB] min-h-screen py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12 border border-slate-200">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
            🚗 Mobile Tire Change Service
          </h1>

          <img
            src="/images/services/tire-change.jpg"
            alt="Mobile Tire Change Service"
            className="w-full rounded-2xl mb-8 shadow"
            loading="lazy"
          />

          <p className="text-slate-700 mb-6 leading-relaxed">
            TireBuddy provides fast and professional <strong>mobile tire change</strong> right at your driveway or workplace.
            We handle seasonal swaps, mounting, and balancing — saving you time and effort.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 mb-3">💡 What’s Included</h2>
          <ul className="list-disc list-inside text-slate-700 mb-6">
            <li>On-site tire change (winter/summer set)</li>
            <li>Full inspection of tread and air pressure</li>
            <li>Proper torqueing of all wheels</li>
            <li>Mobile service — we come to you</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 mb-3">💰 Pricing</h2>
          <div className="bg-[#FFF5F5] border border-[#E63946]/30 rounded-xl p-5 mb-6">
            <p className="text-lg font-semibold text-[#E63946]">
              Sedan / Coupe — from $89
            </p>
            <p className="text-lg font-semibold text-[#E63946]">
              SUV / Truck — from $109
            </p>
            <p className="text-slate-600 mt-2">
              Prices include travel within our Ontario service area. Additional mileage may apply outside GTA.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-slate-900 mb-3">⚙️ What You Can Expect</h2>
          <ul className="list-disc list-inside text-slate-700 mb-8">
            <li>Professional and friendly 2-person team</li>
            <li>Clean, safe work done right in your driveway</li>
            <li>No waiting rooms, no wasted time — we come to you</li>
            <li>Guaranteed satisfaction with every service</li>
          </ul>

          <div className="text-center">
            <a
              href="/#booking"
              className="inline-block px-8 py-3 rounded-full text-white font-semibold shadow hover:shadow-lg transition"
              style={{ background: PRIMARY_RED }}
            >
              📅 Book Tire Change
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
