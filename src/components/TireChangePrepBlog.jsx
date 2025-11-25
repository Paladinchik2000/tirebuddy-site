import { Helmet } from "react-helmet-async";

export default function TireChangePrepBlog() {
  const seoTitle =
    "How to Get Ready for Your Mobile Tire Change Appointment | TireBuddy";
  const seoDesc =
    "Simple steps to prepare for your mobile tire change in Ontario – on-rim tire swap, parking tips, wheel access, and what to check before our technician arrives.";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta
          property="og:title"
          content="How to Get Ready for Your Mobile Tire Change Appointment"
        />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content="https://tirebuddy.ca/blog/mobile-tire-change-ontario"
        />
      </Helmet>

      <div className="bg-[#F4F4F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-16 text-slate-800">
          {/* HEADER */}
          <header className="mb-8">
            <p className="text-sm uppercase tracking-wide text-[#E63946] font-semibold mb-2">
              Tire Change Tips
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              How to Get Ready for Your Mobile Tire Change Appointment
            </h1>
            <p className="text-sm text-slate-500">
              🚗 Mobile Tire Change • March 2025 • 5 min read
            </p>
          </header>

          {/* INTRO */}
          <p className="mb-4 leading-relaxed">
            Mobile tire change is the easiest way to get ready for the season
            in Ontario — <strong>no lineups, no waiting rooms</strong>, and no
            driving on the wrong tires. TireBuddy comes to your home or
            workplace and swaps your on-rim tires right in your driveway.
          </p>
          <p className="mb-6 leading-relaxed">
            To make everything smooth and efficient, there are a few simple
            things you can do before we arrive. Nothing complicated — just
            small steps that help us work faster and keep your vehicle safe.
          </p>

          <hr className="my-6 border-slate-200" />

          {/* SECTION 1 */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              1. Know What Type of Tire Service You Need
            </h2>
            <p className="leading-relaxed mb-2">
              TireBuddy provides <strong>on-rim tire change</strong> – that
              means your tires are already mounted on rims, and we simply swap
              the wheel sets on your vehicle.
            </p>
            <p className="leading-relaxed">
              <strong>Notice:</strong> We don’t provide off-rim service. If your
              tires still need to be mounted to rims, please look for{" "}
              <strong>off-rim mobile tire change</strong> or check with{" "}
              <strong>Costco</strong> or <strong>Canadian Tire</strong> before
              booking your appointment with us.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              2. Park Where We Can Safely Work
            </h2>
            <p className="leading-relaxed mb-2">
              The best spot for a mobile tire change is a{" "}
              <strong>flat, stable surface</strong> such as your driveway or a
              private parking space.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Try to avoid steep slopes or soft ground.</li>
              <li>Leave enough room on both sides of the vehicle.</li>
              <li>
                If you live in a condo, check if there’s enough space in the
                underground or guest parking area.
              </li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              3. Make Your Tires Easy to Access
            </h2>
            <p className="leading-relaxed mb-2">
              If your seasonal tires are stored at home, it helps a lot when
              they’re easy for us to reach.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-2">
              <li>Place your tire set near the garage door or entrance.</li>
              <li>Avoid stacking them behind heavy items or deep in the shed.</li>
              <li>
                If they’re in the basement, no problem — just let us know in the
                notes so we can plan a few extra minutes.
              </li>
            </ul>
            <p className="leading-relaxed">
              The less time we spend hunting for tires, the more time we can
              spend checking them properly.
            </p>
          </section>

          {/* SECTION 4 */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              4. Find Your Wheel Lock Key (If You Have One)
            </h2>
            <p className="leading-relaxed mb-2">
              Many vehicles use a <strong>wheel lock key</strong> on one lug nut
              per wheel. Without it, the wheel can’t be removed safely.
            </p>
            <p className="leading-relaxed">
              Before we arrive, take a quick look in your glove box, trunk, or
              storage compartment for the key. Having it ready saves time and
              avoids delays.
            </p>
          </section>

          {/* SECTION 5 */}
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              5. Check Your Tires for Visible Damage
            </h2>
            <p className="leading-relaxed mb-2">
              You don’t need to be a tire expert — just do a quick visual scan:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>Look for deep cracks, bulges, or exposed cords.</li>
              <li>Check if tread looks extremely worn or uneven.</li>
              <li>
                If something doesn’t look right, mention it in the booking
                message so we can take a closer look on-site.
              </li>
            </ul>
          </section>

          {/* SECTION 6 */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              6. Relax — We’ll Handle the Heavy Lifting
            </h2>
            <p className="leading-relaxed mb-2">
              Once we arrive, our job is to make your tire change{" "}
              <strong>safe, efficient, and stress-free</strong>. We’ll lift the
              vehicle, swap the wheels, torque the nuts properly, and make sure
              everything is ready for the road.
            </p>
            <p className="leading-relaxed">
              With a bit of preparation on your side and professional equipment
              on ours, your seasonal tire change becomes one less thing to
              worry about.
            </p>
          </section>

          {/* CTA */}
          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Ready to Book Your Mobile Tire Change?
            </h2>
            <p className="leading-relaxed mb-4">
              TireBuddy serves drivers across the Greater Toronto Area — from
              Toronto, Mississauga, and Brampton to Aurora, Newmarket, and
              beyond. We come to your driveway so you can stay warm, safe, and
              on schedule.
            </p>
            <a
              href="/#booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E63946] text-white font-semibold shadow hover:shadow-md transition"
            >
              Book Tire Change Appointment
              <span aria-hidden="true">→</span>
            </a>
          </section>
        </article>
      </div>
    </>
  );
}
