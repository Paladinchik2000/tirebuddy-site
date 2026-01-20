import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ChoosingRightTiresBlog() {
  const seoTitle = "How to Choose the Right Tires for Your Vehicle in Ontario | TireBuddy";
  const seoDesc =
    "Complete guide to choosing the right tires for Ontario roads. Learn about tire sizes, types, and what to consider for GTA driving conditions. Expert advice from TireBuddy.";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta name="keywords" content="choose tires Ontario, best tires GTA, tire buying guide Canada, tire size explained, winter tires Toronto, all-season tires Mississauga" />
        <meta property="og:title" content="How to Choose the Right Tires for Your Vehicle in Ontario" />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tirebuddy.ca/blog/choosing-right-tires-ontario" />
        <meta property="og:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
        <link rel="canonical" href="https://tirebuddy.ca/blog/choosing-right-tires-ontario" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Choose the Right Tires for Your Vehicle | TireBuddy Ontario" />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
      </Helmet>

      <div className="bg-[#F4F4F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-16 text-slate-800">
          <header className="mb-8">
            <p className="text-sm uppercase tracking-wide text-[#E63946] font-semibold mb-2">
              Tire Guide
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              How to Choose the Right Tires for Your Vehicle in Ontario
            </h1>
            <p className="text-sm text-slate-500">
              January 2026 • 8 min read
            </p>
          </header>

          <p className="mb-4 leading-relaxed text-lg">
            Choosing the right tires for your vehicle is one of the most important decisions you'll make 
            as a driver in Ontario. With our unique climate — freezing winters, hot summers, and everything 
            in between — selecting the proper tires affects your <strong>safety, fuel economy, and driving comfort</strong>. 
            This comprehensive guide will help you make the right choice.
          </p>

          <hr className="my-6 border-slate-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Understanding Tire Sizes: What Do Those Numbers Mean?
            </h2>
            <p className="leading-relaxed mb-3">
              Every tire has a code on its sidewall (like <strong>P215/65R16 95H</strong>). Here's what each part means:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>P:</strong> Passenger vehicle tire (LT means Light Truck)</li>
              <li><strong>215:</strong> Width of the tire in millimeters</li>
              <li><strong>65:</strong> Aspect ratio (sidewall height as percentage of width)</li>
              <li><strong>R:</strong> Radial construction (standard for modern tires)</li>
              <li><strong>16:</strong> Wheel diameter in inches</li>
              <li><strong>95:</strong> Load index (weight capacity)</li>
              <li><strong>H:</strong> Speed rating (maximum safe speed)</li>
            </ul>
            <div className="bg-red-50 border-l-4 border-[#E63946] p-4 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Important:</strong> Always match your new tires to the size recommended in your 
                vehicle's owner manual or the placard on the driver's door jamb. Using the wrong size 
                can affect handling, speedometer accuracy, and safety.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Types of Tires for Ontario Drivers
            </h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              1. Winter Tires (Snow Tires)
            </h3>
            <p className="leading-relaxed mb-3">
              Designed for temperatures below 7°C, winter tires use a softer rubber compound that stays 
              flexible in cold weather. They feature deeper treads and specialized patterns for snow and ice grip.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li>Look for the <strong>mountain/snowflake symbol</strong> — this is the gold standard</li>
              <li>Required by many Ontario insurance companies for winter discounts</li>
              <li>Perform best from November to April in the GTA</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              2. All-Season Tires
            </h3>
            <p className="leading-relaxed mb-3">
              A versatile option for moderate climates, all-season tires work well in spring, summer, and 
              fall. However, they're <strong>not ideal for harsh Ontario winters</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li>Good for temperatures above 7°C</li>
              <li>Acceptable for light snow but not ice</li>
              <li>Popular choice for year-round use in milder regions</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              3. All-Weather Tires
            </h3>
            <p className="leading-relaxed mb-3">
              A hybrid option that combines features of all-season and winter tires. Look for the 
              <strong> 3-peak mountain snowflake symbol</strong> — these can legally be used year-round 
              in all Canadian provinces.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li>Convenient one-tire solution</li>
              <li>Not as good as dedicated winter tires in extreme conditions</li>
              <li>Higher cost but saves on seasonal tire changes</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              4. Performance/Summer Tires
            </h3>
            <p className="leading-relaxed mb-3">
              Designed for warm weather and high-speed handling. These tires offer excellent grip on 
              dry and wet roads but are <strong>dangerous in cold temperatures</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li>Best for sports cars and performance vehicles</li>
              <li>Must be removed before temperatures drop below 7°C</li>
              <li>Not recommended as your only set of tires in Ontario</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Factors to Consider for Ontario Roads
            </h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              Climate and Weather Conditions
            </h3>
            <p className="leading-relaxed mb-3">
              The Greater Toronto Area experiences significant temperature swings — from -20°C in winter 
              to +35°C in summer. Most Ontario drivers benefit from having <strong>two sets of tires</strong>: 
              winter tires for November-April and all-season tires for the rest of the year.
            </p>

            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              Your Driving Style
            </h3>
            <p className="leading-relaxed mb-3">
              Consider how and where you drive:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li><strong>Highway commuters:</strong> Prioritize fuel efficiency and comfort</li>
              <li><strong>City drivers:</strong> Focus on durability and handling</li>
              <li><strong>Rural roads:</strong> Consider all-terrain options for gravel and unpaved surfaces</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              Vehicle Type
            </h3>
            <p className="leading-relaxed mb-3">
              Different vehicles have different tire requirements:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li><strong>Sedans and hatchbacks:</strong> Standard passenger tires</li>
              <li><strong>SUVs and crossovers:</strong> May need higher load ratings</li>
              <li><strong>Trucks:</strong> LT (Light Truck) tires for heavier loads</li>
              <li><strong>Electric vehicles:</strong> EV-specific tires for better range and quieter ride</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Top Tire Brands Available in Ontario
            </h2>
            <p className="leading-relaxed mb-3">
              Here are trusted tire brands that perform well in Canadian conditions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>Michelin:</strong> Premium quality, excellent winter options like X-Ice</li>
              <li><strong>Bridgestone:</strong> Blizzak winter tires are highly rated</li>
              <li><strong>Continental:</strong> Great all-around performance</li>
              <li><strong>Goodyear:</strong> Reliable and widely available</li>
              <li><strong>Nokian:</strong> Finnish brand, exceptional winter performance</li>
              <li><strong>Toyo:</strong> Good value, popular in Canada</li>
              <li><strong>Hankook:</strong> Budget-friendly with solid performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Budget Considerations
            </h2>
            <p className="leading-relaxed mb-3">
              Tire prices in Ontario typically range from:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li><strong>Budget tires:</strong> $80-$120 per tire</li>
              <li><strong>Mid-range tires:</strong> $120-$180 per tire</li>
              <li><strong>Premium tires:</strong> $180-$300+ per tire</li>
            </ul>
            <p className="leading-relaxed mb-3">
              Remember: <strong>tires are a safety investment</strong>. While budget options can work, 
              investing in quality tires often means better performance, longer life, and improved fuel 
              economy — saving money in the long run.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Money-Saving Tip:</strong> Buy tires at the end of each season (late March for 
                winter, late September for summer) when retailers offer clearance sales.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Let TireBuddy Handle Your Tire Change
            </h2>
            <p className="leading-relaxed mb-3">
              Once you've chosen your tires, TireBuddy makes installation easy. Our mobile tire service 
              comes to your home, condo, or workplace anywhere in the GTA. We'll swap your tires quickly 
              and professionally — no need to visit a shop or wait in line.
            </p>
            <p className="leading-relaxed">
              <strong>Starting at just $89</strong>, our service includes tire mounting, balancing, and 
              a courtesy vehicle inspection. We serve Toronto, Mississauga, Brampton, and surrounding areas.
            </p>
          </section>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#booking"
              className="inline-block text-center px-6 py-3 bg-[#E63946] text-white font-semibold rounded-full shadow hover:shadow-lg transition"
            >
              Book Your Tire Change
            </Link>
            <Link
              to="/blog"
              className="inline-block text-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-full hover:bg-slate-100 transition"
            >
              Back to Blog
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
