import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function TireBuddyHome() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const PRIMARY_RED = "#E63946";

  return (
    <div className="bg-[#F4F4F4] min-h-screen flex flex-col">
      {loading ? (
        <div className="flex flex-col items-center justify-center flex-1">
          <img
            src="https://i.imgur.com/4YFSmoN.png"
            alt="Buddy loading"
            className="h-24 w-24 animate-spin"
          />
          <p className="text-slate-700 mt-3">Loading TireBuddy...</p>
        </div>
      ) : (
        <>
          <main className="flex-1">
            <section className="text-center py-20">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Your Tire’s Best Friend
              </h1>
              <p className="text-slate-700 max-w-xl mx-auto">
                Fast, friendly, and mobile tire service across Ontario — from tire changes
                to seasonal cleanup, we come to you.
              </h1>
              <p className="text-slate-700 max-w-xl mx-auto">
                We offer a 10% discount for pensioner!
              </p>
            </section>

            <section id="services" className="max-w-6xl mx-auto px-4 py-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Our Services
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Tire Change", desc: "Seasonal swaps done at your driveway." },
                  { title: "Punctured Tire Repair", desc: "We fix flats on-site quickly." },
                  { title: "Gutter Cleaning", desc: "Prevent water damage to your home." },
                  { title: "Fall Cleanup", desc: "Keep your yard clean before winter." },
                  { title: "Snow Plowing", desc: "Reliable driveway clearing in winter." },
                ].map((s) => (
                  <article key={s.title} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:shadow-md transition">
                    <h3 className="font-semibold text-slate-900">{s.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="booking" className="bg-[#F9FAFB] border-t border-slate-200 py-20">
              <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-bold text-slate-900 mb-2">Book Your Appointment</h2>
                  <p className="text-slate-600">
                    Fast, friendly, and mobile — we come to you. Fill out the form below and we’ll get back to you shortly.
                  </p>
                </div>

                <form
                  action="https://formspree.io/f/xwprnndy"
                  method="POST"
                  className="bg-white shadow-md rounded-2xl p-8 space-y-5 border border-slate-200"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <input type="text" name="name" placeholder="Full Name" required className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none" />
                    <input type="tel" name="phone" placeholder="Phone Number" required className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input type="text" name="vehicle_make" placeholder="Vehicle Make" required className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none" />
                    <input type="text" name="vehicle_model" placeholder="Vehicle Model" required className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input type="text" name="address" placeholder="Address" required className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none" />
                    <input type="text" name="postal_code" placeholder="Postal Code" required className="rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none" />
                  </div>

                  <select name="service_type" required className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none text-slate-700">
                    <option value="">Select Service</option>
                    <option value="tire_change">Tire Change</option>
                    <option value="punctured_tire_repair">Punctured Tire Repair</option>
                    <option value="gutter_cleaning">Gutter Cleaning</option>
                    <option value="fall_cleanup">Fall Cleanup</option>
                    <option value="snow_plowing">Snow Plowing</option>
                  </select>

                  <textarea name="message" placeholder="Additional Details (optional)" className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-[#E63946] focus:outline-none min-h-[100px]"></textarea>

                  <button type="submit" className="w-full bg-[#E63946] text-white py-3 font-semibold rounded-full shadow-md hover:opacity-90 transition">
                    Submit Request
                  </button>
                </form>
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}
