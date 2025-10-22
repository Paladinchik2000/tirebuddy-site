import { useState, useEffect } from "react";

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
          {/* ===== HERO SECTION ===== */}
          <section
            className="relative flex flex-col justify-center items-center text-center text-white h-[80vh] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.imgur.com/7Wi8YBS.png')",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 px-6">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                Your Tire’s Best Friend
              </h1>
              <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto drop-shadow">
                Fast, friendly, and mobile tire service across Ontario — from tire changes to seasonal cleanup, we come to you.
              </p>
            </div>
          </section>

          {/* ===== SENIORS DISCOUNT BANNER ===== */}
          <section className="bg-[#E63946] text-white text-center py-6 md:py-10 shadow-md">
            <h2 className="text-3xl font-bold mb-2">10% Seniors Discount</h2>
            <p className="text-lg text-red-100 max-w-2xl mx-auto">
              Because experience deserves appreciation — we’re proud to offer all seniors 10% off our tire services.
            </p>
          </section>

          {/* ===== BENEFITS SECTION ===== */}
          <section className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
              Why Choose TireBuddy?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚗",
                  title: "Fast & Reliable Service",
                  desc: "Quick tire changes and maintenance done wherever you are — no waiting lines, no wasted time.",
                },
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Family-Owned & Friendly",
                  desc: "We treat every customer like a neighbour — friendly faces, honest prices, and dependable work.",
                },
                {
                  icon: "🧰",
                  title: "We Come To You — Mobile & Easy",
                  desc: "Our fully equipped mobile units handle your tires at home, work, or anywhere that’s convenient.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1 p-8 text-center"
                >
                  <div className="text-5xl mb-4">{b.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-slate-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </section>
          
{/* ===== ABOUT TIREBUDDY INFO SECTION ===== */}
<section className="bg-white border-t border-slate-200 py-20">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <img
        src="https://images.unsplash.com/photo-1615201216513-88e53b8c5d04?auto=format&fit=crop&w=800&q=80"
        alt="TireBuddy mobile service van"
        className="rounded-2xl shadow-md"
      />
    </div>

    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-4">
        Built on Trust. Driven by Care.
      </h2>
      <p className="text-slate-700 mb-4 leading-relaxed">
        At <span className="font-semibold text-[#E63946]">TireBuddy</span>, we believe that taking care of your car
        should be simple, stress-free, and personal. That’s why we bring
        professional tire service right to your driveway — saving you time and hassle.
      </p>
      <p className="text-slate-700 mb-4 leading-relaxed">
        As a proud family-operated Canadian business, we value honesty,
        reliability, and community. Every service we perform is done with care,
        attention to detail, and a friendly smile.
      </p>
      <p className="text-slate-700 leading-relaxed">
        Whether it’s a quick tire change, a flat repair, or seasonal cleanup —
        TireBuddy is here to make sure your vehicle is ready for the road ahead.
        Because for us, it’s not just about tires — it’s about people.
      </p>
    </div>
  </div>
</section>

          {/* ===== BOOKING SECTION ===== */}
          <section id="booking" className="bg-white border-t border-slate-200 py-16">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
                Book an Appointment
              </h2>
             <form
  action="https://formspree.io/f/xwprnndy"
  method="POST"
  className="space-y-4"
>
  <input
    type="text"
    name="name"
    placeholder="Full Name"
    required
    className="w-full rounded-lg border border-slate-300 px-4 py-2"
  />
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    required
    className="w-full rounded-lg border border-slate-300 px-4 py-2"
  />

  {/* SERVICE SELECTION */}
  <select
    name="service"
    required
    className="w-full rounded-lg border border-slate-300 px-4 py-2 bg-white"
  >
    <option value="">Select a Service</option>
    <option value="Tire Change">Tire Change</option>
    <option value="Punctured Tire Repair">Punctured Tire Repair</option>
    <option value="Gutter Cleaning">Gutter Cleaning</option>
    <option value="Fall Cleanup">Fall Cleanup</option>
    <option value="Snow Plowing">Snow Plowing</option>
  </select>

  {/* VEHICLE INFO */}
  <input
    type="text"
    name="vehicle_make"
    placeholder="Vehicle Make"
    required
    className="w-full rounded-lg border border-slate-300 px-4 py-2"
  />
  <input
    type="text"
    name="vehicle_model"
    placeholder="Vehicle Model"
    required
    className="w-full rounded-lg border border-slate-300 px-4 py-2"
  />

  {/* NEW: ADDRESS FIELD */}
  <input
    type="text"
    name="address"
    placeholder="Service Address"
    required
    className="w-full rounded-lg border border-slate-300 px-4 py-2"
  />

  {/* POSTAL CODE */}
  <input
    type="text"
    name="postal_code"
    placeholder="Postal Code"
    required
    className="w-full rounded-lg border border-slate-300 px-4 py-2"
  />

  <textarea
    name="message"
    placeholder="Additional Details (optional)"
    className="w-full rounded-lg border border-slate-300 px-4 py-2"
  ></textarea>

  <button
    type="submit"
    className="w-full rounded-lg bg-[#E63946] text-white py-3 font-semibold shadow hover:opacity-90 transition"
  >
    Submit Request
  </button>
</form>

            </div>
          </section>
        </>
      )}
    </div>
  );
}
