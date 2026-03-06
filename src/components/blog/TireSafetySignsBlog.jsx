import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function TireSafetySignsBlog() {
  const seoTitle = "5 Warning Signs You Need New Tires | TireBuddy Ontario";
  const seoDesc =
    "Learn the 5 critical warning signs that indicate you need new tires. From tread wear to sidewall cracks, TireBuddy explains when it's time for a tire change in Ontario.";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta property="og:title" content="5 Warning Signs You Need New Tires" />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tirebuddy.ca/blog/tire-safety-warning-signs" />
        <link rel="canonical" href="https://tirebuddy.ca/blog/tire-safety-warning-signs" />
      </Helmet>

      <div className="bg-[#F4F4F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-16 text-slate-800">
          <header className="mb-8">
            <p className="text-sm uppercase tracking-wide text-[#E63946] font-semibold mb-2">
              Tire Safety
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              5 Warning Signs You Need New Tires
            </h1>
            <p className="text-sm text-slate-500">
              January 2026 • 6 min read
            </p>
          </header>

          <p className="mb-4 leading-relaxed text-lg">
            Your tires are the only part of your vehicle that touches the road. They're critical for 
            <strong> safety, handling, and fuel efficiency</strong>. Yet many Ontario drivers don't 
            know when it's time to replace them. Here are 5 warning signs that indicate you need 
            new tires — don't ignore them!
          </p>

          <hr className="my-6 border-slate-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              1. Low Tread Depth — The Penny Test
            </h2>
            <p className="leading-relaxed mb-3">
              Tire tread is essential for gripping the road, especially in rain or snow. In Ontario, 
              the legal minimum tread depth is <strong>1.6mm</strong>, but experts recommend replacing 
              tires at <strong>3mm</strong> for safety.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>The Penny Test:</strong> Insert a penny into your tire tread with the Queen's 
              crown facing down. If you can see the top of the crown, your tread is too low and 
              it's time for new tires.
            </p>
            <div className="bg-red-50 border-l-4 border-[#E63946] p-4 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Pro Tip:</strong> Uneven tread wear often indicates alignment or suspension 
                issues. Have these checked when you replace your tires.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              2. Visible Cracks or Bulges in the Sidewall
            </h2>
            <p className="leading-relaxed mb-3">
              Sidewall damage is a serious safety concern. Look for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>Cracks:</strong> Small lines or grooves in the sidewall indicate rubber degradation</li>
              <li><strong>Bulges:</strong> Bumps or blisters suggest internal tire damage</li>
              <li><strong>Cuts:</strong> Any visible cuts or gouges that expose cords</li>
            </ul>
            <p className="leading-relaxed">
              These defects can lead to sudden blowouts. If you notice any sidewall damage, 
              <strong> replace the tire immediately</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              3. Vibration While Driving
            </h2>
            <p className="leading-relaxed mb-3">
              Some vibration is normal on rough roads, but excessive vibration could indicate:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li>Unbalanced tires</li>
              <li>Misaligned wheels</li>
              <li>Internal tire damage</li>
              <li>Worn suspension components</li>
            </ul>
            <p className="leading-relaxed">
              If vibration persists on smooth roads, have your tires inspected. Continuing to drive 
              on damaged tires can cause further vehicle damage and is dangerous.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              4. Age of Your Tires — The 6-Year Rule
            </h2>
            <p className="leading-relaxed mb-3">
              Even if your tires look fine, rubber degrades over time. Most manufacturers recommend 
              replacing tires <strong>every 6 years</strong>, regardless of tread depth.
            </p>
            <p className="leading-relaxed mb-3">
              <strong>How to check tire age:</strong> Look for the DOT code on the sidewall. The last 
              4 digits indicate the week and year of manufacture. For example, "2521" means the tire 
              was made in week 25 of 2021.
            </p>
            <p className="leading-relaxed">
              Ontario's harsh winters and hot summers accelerate rubber aging. If your tires are 
              older than 6 years, consider replacement even if they appear serviceable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              5. Poor Fuel Economy or Handling
            </h2>
            <p className="leading-relaxed mb-3">
              Worn tires affect more than just safety — they impact your wallet and driving experience:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>Increased fuel consumption:</strong> Worn tires create more rolling resistance</li>
              <li><strong>Longer stopping distances:</strong> Critical in emergency situations</li>
              <li><strong>Poor cornering:</strong> Less grip means less control</li>
              <li><strong>Hydroplaning:</strong> Worn tread can't channel water effectively</li>
            </ul>
            <p className="leading-relaxed">
              If you've noticed your car doesn't handle like it used to, your tires may be the culprit.
            </p>
          </section>

          <hr className="my-6 border-slate-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Stay Safe on Ontario Roads
            </h2>
            <p className="leading-relaxed mb-4">
              Regular tire inspections can prevent accidents and save you money in the long run. 
              At TireBuddy, we check your tires during every service and can advise you on when 
              it's time for replacements.
            </p>
            <p className="leading-relaxed">
              Need a tire change? <strong>TireBuddy comes to you</strong> — at home, work, or 
              anywhere in the GTA. We'll swap your tires and give you honest advice about their condition.
            </p>
          </section>

          <div className="bg-gradient-to-r from-[#E63946] to-[#ff6b6b] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready for a Tire Change?</h3>
            <p className="mb-4 opacity-90">
              Book your mobile tire change today — starting at just $89
            </p>
            <Link
              to="/#booking"
              className="inline-block px-8 py-3 bg-white text-[#E63946] font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Book Now
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200">
            <Link to="/blog" className="text-[#E63946] font-semibold hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
