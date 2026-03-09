import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function WhenToReplaceWinterTiresBlog() {
  const seoTitle = "When to Replace Your Winter Tires: 6 Signs They're Worn Out | TireBuddy";
  const seoDesc =
    "How do you know when your winter tires need replacing? Learn the 6 key signs of worn winter tires, tread depth rules for Ontario, and how old tires affect your safety on icy roads.";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="canonical" href="https://tirebuddy.ca/blog/when-to-replace-winter-tires" />
        <meta property="og:title" content="When to Replace Your Winter Tires: 6 Signs They're Worn Out" />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tirebuddy.ca/blog/when-to-replace-winter-tires" />
        <meta property="og:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
      </Helmet>

      <div className="bg-[#F4F4F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-16 text-slate-800">
          <header className="mb-8">
            <p className="text-sm uppercase tracking-wide text-[#E63946] font-semibold mb-2">
              Winter Tire Safety
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              When to Replace Your Winter Tires: 6 Signs They're Worn Out
            </h1>
            <p className="text-sm text-slate-500">
              ❄️ Tire Safety • March 2026 • 7 min read
            </p>
          </header>

          <p className="mb-4 leading-relaxed">
            Every fall, Ontario drivers pull their winter tires out of storage and get them mounted for the season ahead. But here's a question many people skip: <strong>are your winter tires still safe to use?</strong>
          </p>
          <p className="mb-6 leading-relaxed">
            Winter tires don't last forever. The rubber compound breaks down over time, the tread wears down with each season, and small damage can go unnoticed until it becomes a real problem. In this guide, we'll walk you through the <strong>6 clear signs your winter tires need replacing</strong> — so you can stay safe on Ontario's icy, snowy roads.
          </p>

          <hr className="my-6 border-slate-200" />

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              1. Tread Depth Is Below 4mm
            </h2>
            <p className="leading-relaxed mb-2">
              This is the most important measurement for winter tires. While Ontario law requires a minimum tread depth of <strong>1.5mm</strong> for any tire, winter tires lose most of their cold-weather grip well before that point.
            </p>
            <p className="leading-relaxed mb-2">
              Tire safety experts recommend replacing winter tires when the tread reaches <strong>4mm or less</strong>. At that depth, the tire can no longer channel snow and slush effectively, and braking distance on icy roads increases significantly.
            </p>
            <div className="bg-white border border-slate-200 rounded-xl p-4 my-4">
              <p className="font-semibold text-slate-900 mb-1">Quick tread check (no tools needed):</p>
              <p className="text-slate-700">Insert a Canadian quarter into the tread groove with the caribou nose pointing down. If you can see the tip of the nose, your tread is getting too low and it's time to start shopping for new winter tires.</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              2. Your Tires Are More Than 6 Years Old
            </h2>
            <p className="leading-relaxed mb-2">
              Even if your winter tires look fine and have decent tread, age matters. The soft rubber compound in winter tires <strong>hardens over time</strong>, regardless of how many kilometres you've driven on them.
            </p>
            <p className="leading-relaxed mb-2">
              Most tire manufacturers recommend replacing winter tires after <strong>6 seasons of use</strong>, and no later than <strong>10 years from the manufacture date</strong> — even if they've been sitting in storage.
            </p>
            <div className="bg-white border border-slate-200 rounded-xl p-4 my-4">
              <p className="font-semibold text-slate-900 mb-1">How to find the manufacture date:</p>
              <p className="text-slate-700">Look for the <strong>DOT code</strong> on the sidewall. The last four digits tell you the week and year of manufacture. For example, "2219" means the tire was made in week 22 of 2019.</p>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              3. Uneven Tread Wear
            </h2>
            <p className="leading-relaxed mb-2">
              If your winter tires are wearing unevenly — more on one side than the other, or worn in patches — it could point to alignment issues, improper inflation, or suspension problems.
            </p>
            <p className="leading-relaxed">
              Regardless of the cause, uneven tread means <strong>inconsistent grip</strong>. Some parts of the tire have good traction while others don't, which makes handling unpredictable on slippery roads. If you notice uneven wear, it's best to replace the tires and get your alignment checked before mounting the new set.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              4. Cracks, Bulges, or Sidewall Damage
            </h2>
            <p className="leading-relaxed mb-2">
              Take a close look at the sidewalls of your winter tires. Do you see any of these?
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li><strong>Small cracks or dry-rot lines</strong> — a sign the rubber is breaking down from age or poor storage conditions.</li>
              <li><strong>Bulges or bubbles</strong> — these indicate internal structural damage, often from hitting a pothole or curb. A bulging tire can blow out without warning.</li>
              <li><strong>Cuts or deep scuffs</strong> — damage that has gone through the outer rubber layer weakens the tire.</li>
            </ul>
            <p className="leading-relaxed">
              Any of these are serious safety concerns. <strong>Do not drive on tires with sidewall damage</strong> — replace them immediately.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              5. Your Tires Feel Slippery Even in Light Snow
            </h2>
            <p className="leading-relaxed mb-2">
              You know your car better than anyone. If your winter tires used to grip confidently on snowy roads but now feel like they're <strong>sliding or slipping</strong> in conditions that shouldn't be a problem — that's a clear sign they've lost their effectiveness.
            </p>
            <p className="leading-relaxed">
              Hardened rubber, worn sipes (the tiny slits in the tread), and shallow tread all reduce traction. If your gut tells you something isn't right, trust it. Have your tires inspected or measured by a professional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              6. The Tread Wear Indicators Are Showing
            </h2>
            <p className="leading-relaxed mb-2">
              Most modern winter tires have built-in <strong>tread wear indicators</strong> — small raised bars that sit in the grooves of the tread. When the tire surface wears down to the same level as these bars, the tire has reached its minimum safe depth.
            </p>
            <p className="leading-relaxed mb-2">
              Some winter tires also have a <strong>snowflake indicator</strong> that disappears when the tire is no longer effective for winter use — even if there's still some general tread left.
            </p>
            <p className="leading-relaxed">
              If you can see the wear bars clearly or the snowflake symbol is gone, it's time to replace your winter tires before the next season.
            </p>
          </section>

          <hr className="my-6 border-slate-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              How Long Do Winter Tires Last in Ontario?
            </h2>
            <p className="leading-relaxed mb-2">
              The lifespan of winter tires depends on several factors: how many kilometres you drive each winter, road conditions, storage, and the tire brand. As a general guide for Ontario drivers:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li><strong>Average daily commuter:</strong> 4–5 seasons</li>
              <li><strong>Low mileage / weekend driver:</strong> 5–6 seasons</li>
              <li><strong>Heavy use / highway driving:</strong> 3–4 seasons</li>
            </ul>
            <p className="leading-relaxed">
              Always check tread depth and condition at the start of each winter — even if the tires "should" have more life left. Ontario's freeze-thaw cycles, road salt, and potholes can accelerate wear faster than expected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">
              Can You Mix Old and New Winter Tires?
            </h2>
            <p className="leading-relaxed mb-2">
              It's not recommended. Mixing tires with different tread depths or ages creates <strong>unbalanced grip</strong> — your car may handle unpredictably on snow and ice, especially during turns or emergency braking.
            </p>
            <p className="leading-relaxed">
              If only one or two tires are worn, it's still safer to <strong>replace all four at the same time</strong>. This ensures even traction on all wheels and better overall control in winter conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Need Help Checking Your Winter Tires?
            </h2>
            <p className="leading-relaxed mb-4">
              Not sure if your winter tires are still safe? TireBuddy can help. We offer <strong>mobile tire inspections and tire changes</strong> across the Greater Toronto Area — including Toronto, Mississauga, Brampton, Markham, Oakville, and surrounding areas.
            </p>
            <p className="leading-relaxed mb-4">
              We'll check your tread depth, look for signs of wear or damage, and swap your tires right in your driveway — no shop visit needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/#booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E63946] text-white font-semibold shadow hover:shadow-md transition"
              >
                Book a Tire Check
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-300 text-slate-700 font-semibold hover:border-[#E63946] hover:text-[#E63946] transition"
              >
                More Articles
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
