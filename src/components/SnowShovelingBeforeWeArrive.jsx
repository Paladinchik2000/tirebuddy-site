import { Helmet } from "react-helmet-async";

export default function SnowShovelingBeforeWeArrive() {
  const seoTitle =
    "Before We Arrive: How to Prepare for Your Snow Shoveling | TireBuddy";
  const seoDesc =
    "Simple steps to prepare your driveway and yard before TireBuddy arrives to clear the snow — move cars, open gates, and make our job safer and faster.";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href="https://tirebuddy.ca/blog/snow-shoveling-before-we-arrive" />
        <meta property="og:title" content="Before We Arrive: How to Prepare for Your Snow Shoveling" />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tirebuddy.ca/blog/snow-shoveling-before-we-arrive" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
      </Helmet>

      <div className="bg-[#F4F4F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-16 text-slate-800">
          {/* Заголовок */}
          <header className="mb-8">
            <p className="text-sm uppercase tracking-wide text-[#E63946] font-semibold mb-2">
              Snow Shoveling Tips
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Before We Arrive: A Few Small Things That Help
            </h1>
            <p className="text-sm text-slate-500">
              ❄️ Snow Shoveling • February 2025 • 4 min read
            </p>
          </header>

          {/* Вступление */}
          <p className="mb-4 leading-relaxed">
            Snow happens fast in Ontario — but your day doesn’t have to stop
            because of it. When TireBuddy comes to clear your snow, our goal is
            simple: <strong>make your driveway safe, clean, and usable</strong>{" "}
            as quickly as possible.
          </p>
          <p className="mb-6 leading-relaxed">
            The good news? There’s not much you need to do before we arrive.
            But a few small preparations can make a big difference — they help
            us work faster, safer, and more efficiently, so you get the best
            result for your home.
          </p>

          <hr className="my-6 border-slate-200" />

          {/* Блоки по разделам */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                1. Move Cars If Possible
              </h2>
              <p className="leading-relaxed mb-2">
                If you can, try to{" "}
                <strong>move your vehicles off the driveway</strong> before we
                arrive — even if it’s just onto the street or slightly to the
                side.
              </p>
              <p className="leading-relaxed">
                This lets us clear the full surface of your driveway, avoid snow
                “islands” around the tires, and finish the job cleaner and
                faster.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                2. Open Any Gates or Access Points
              </h2>
              <p className="leading-relaxed mb-2">
                If you’d like us to clear your backyard, side path, or walkway,
                it really helps when gates are{" "}
                <strong>unlocked and open</strong>, and pets are safely inside.
              </p>
              <p className="leading-relaxed">
                That way we don’t need to disturb you, and we can go straight to
                work without knocking or calling — especially early in the
                morning.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                3. Let Us Know About Cables, Hoses, or Hidden Items
              </h2>
              <p className="leading-relaxed mb-2">
                Snow has a sneaky way of hiding things: garden hoses, extension
                cords, decorations, toys, or tools.
              </p>
              <p className="leading-relaxed mb-2">
                If you know there’s something under the snow in the area we’ll
                be clearing, it helps a lot if you either move it before we
                arrive or leave a short note in your booking form.
              </p>
              <p className="leading-relaxed">
                This helps us avoid damage, keeps our tools from catching on
                anything, and lets us work smoothly and safely around your
                property.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                4. Tell Us About Any Special Areas You Care About
              </h2>
              <p className="leading-relaxed mb-2">
                Every home is a bit different. Some people care most about front
                steps, a path to the side door, or an extra parking spot.
              </p>
              <p className="leading-relaxed">
                If there’s a specific area you really want cleared, just mention
                it in your booking message — we’ll always start with safety
                first and then give extra attention to the spots that matter
                most to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">
                5. Don’t Stress — We’ll Handle the Heavy Work
              </h2>
              <p className="leading-relaxed mb-2">
                You don’t need to start shoveling or pre-clear everything. As
                long as we can access the areas you want cleared, we’ll handle
                the heavy, frozen, piled-up snow — so you don’t have to.
              </p>
            </div>
          </section>

          <hr className="my-8 border-slate-200" />

          {/* Чек-лист */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Quick Checklist Before TireBuddy Arrives
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              <li>
                🚗 If possible, move cars off the main part of the driveway
              </li>
              <li>🚪 Open gates if you want the backyard or side path cleared</li>
              <li>
                🧵 Move hoses, cables, and fragile items out of the way if you
                can
              </li>
              <li>
                📝 Add a short note in your booking if you have special areas to
                focus on
              </li>
            </ul>
          </section>

          {/* Заключение + кнопка брони */}
          <section className="mb-4">
            <p className="leading-relaxed mb-4">
              With a bit of preparation on your side and professional equipment
              on ours, we’ll keep your driveway and walkways clear, safe, and
              ready for everyday life — even on the snowiest days.
            </p>
            <a
              href="/#booking"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E63946] text-white font-semibold shadow hover:shadow-md transition"
            >
              Book Snow Shoveling Service
              <span aria-hidden="true">→</span>
            </a>
          </section>
        </article>
      </div>
    </>
  );
}
