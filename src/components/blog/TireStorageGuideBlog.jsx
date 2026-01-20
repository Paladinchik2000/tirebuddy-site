import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function TireStorageGuideBlog() {
  const seoTitle = "Complete Guide to Seasonal Tire Storage in Canada | TireBuddy Ontario";
  const seoDesc =
    "Learn how to properly store your seasonal tires in Ontario. Expert tips on tire storage locations, preparation, and common mistakes to avoid. Extend tire life with proper care.";

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta name="keywords" content="tire storage Ontario, how to store winter tires, tire storage Toronto, seasonal tire storage Canada, tire storage tips GTA, store tires condo" />
        <meta property="og:title" content="Complete Guide to Seasonal Tire Storage in Canada" />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://tirebuddy.ca/blog/tire-storage-guide-canada" />
        <meta property="og:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
        <link rel="canonical" href="https://tirebuddy.ca/blog/tire-storage-guide-canada" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seasonal Tire Storage Guide for Ontario Drivers | TireBuddy" />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
      </Helmet>

      <div className="bg-[#F4F4F4] min-h-screen">
        <article className="max-w-3xl mx-auto px-4 py-16 text-slate-800">
          <header className="mb-8">
            <p className="text-sm uppercase tracking-wide text-[#E63946] font-semibold mb-2">
              Tire Care
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Complete Guide to Seasonal Tire Storage in Canada
            </h1>
            <p className="text-sm text-slate-500">
              January 2026 • 7 min read
            </p>
          </header>

          <p className="mb-4 leading-relaxed text-lg">
            If you're like most Ontario drivers, you have two sets of tires — winter and all-season. 
            Proper storage of your off-season tires is crucial for <strong>extending their lifespan</strong> 
            and ensuring they perform safely when you need them again. This guide covers everything you 
            need to know about storing tires in Canadian conditions.
          </p>

          <hr className="my-6 border-slate-200" />

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Why Proper Tire Storage Matters
            </h2>
            <p className="leading-relaxed mb-3">
              Tires are a significant investment. A quality set can cost $600-$1,200 or more. Improper 
              storage can lead to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>Flat spots:</strong> From sitting in one position too long</li>
              <li><strong>Rubber degradation:</strong> From UV exposure and temperature extremes</li>
              <li><strong>Sidewall damage:</strong> From improper stacking or hanging</li>
              <li><strong>Dry rot:</strong> From ozone exposure and poor conditions</li>
            </ul>
            <p className="leading-relaxed">
              Proper storage can extend your tire life by <strong>2-3 years</strong>, saving you hundreds 
              of dollars in early replacements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Step 1: Clean Your Tires Before Storage
            </h2>
            <p className="leading-relaxed mb-3">
              Before storing your tires for the season, give them a thorough cleaning:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700 mb-3">
              <li>Wash with mild soap and water to remove road salt, brake dust, and grime</li>
              <li>Use a tire brush to clean the treads thoroughly</li>
              <li>Rinse completely — leftover soap can damage rubber</li>
              <li>Dry completely before storing to prevent mold and mildew</li>
            </ol>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Skip the tire shine:</strong> Most tire dressing products contain chemicals 
                that can dry out rubber over time. Store tires clean and dry, without any products applied.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Step 2: Inspect for Damage
            </h2>
            <p className="leading-relaxed mb-3">
              Before putting your tires away, inspect each one for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>Tread depth:</strong> Check if they'll be safe to use next season</li>
              <li><strong>Punctures or nails:</strong> Get these repaired before storage</li>
              <li><strong>Sidewall cracks:</strong> Signs of aging or damage</li>
              <li><strong>Uneven wear:</strong> May indicate alignment issues</li>
            </ul>
            <p className="leading-relaxed">
              Mark any issues with tape or a note so you remember to address them before next installation. 
              This is also a good time to <strong>mark the tire position</strong> (Front Left, Rear Right, etc.) 
              for proper rotation next season.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Step 3: Choose the Right Storage Method
            </h2>
            <p className="leading-relaxed mb-3">
              How you store your tires depends on whether they're mounted on rims or not:
            </p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              Tires Mounted on Rims (Wheels)
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>Best method:</strong> Stack flat, no more than 4 high</li>
              <li><strong>Alternative:</strong> Hang on tire hooks (supports the rim, not the rubber)</li>
              <li>Inflate to recommended pressure before storage</li>
              <li>Place cardboard between stacked tires to prevent scratches</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              Tires Without Rims
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>Best method:</strong> Store upright (standing on tread)</li>
              <li><strong>Never:</strong> Hang unmounted tires — this distorts the shape</li>
              <li><strong>Never:</strong> Stack unmounted tires flat — causes flat spots</li>
              <li>Rotate position monthly if possible</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-[#E63946] p-4 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Important:</strong> Never store tires on their sidewalls if they're not mounted. 
                The weight can cause permanent damage to the tire's structure.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Step 4: Find the Ideal Storage Location
            </h2>
            <p className="leading-relaxed mb-3">
              The perfect tire storage location should be:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>Cool:</strong> Ideally below 25°C (77°F)</li>
              <li><strong>Dry:</strong> Humidity promotes mold and rubber degradation</li>
              <li><strong>Dark:</strong> UV light breaks down rubber compounds</li>
              <li><strong>Clean:</strong> Away from chemicals, oils, and solvents</li>
              <li><strong>Away from ozone sources:</strong> Electric motors and furnaces produce ozone</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              Good Storage Locations
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li>Climate-controlled basement</li>
              <li>Indoor storage unit</li>
              <li>Climate-controlled garage</li>
              <li>Professional tire storage facility</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-2 mt-4">
              Poor Storage Locations
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-3">
              <li>Outdoor shed (temperature extremes)</li>
              <li>Unheated garage in winter (freezing damages rubber)</li>
              <li>Balcony or patio (UV and weather exposure)</li>
              <li>Near pool equipment (chlorine damages rubber)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Tire Storage Options for Condo Dwellers
            </h2>
            <p className="leading-relaxed mb-3">
              Living in a Toronto or GTA condo? Storage space is often limited. Here are your options:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-3">
              <li><strong>Condo locker:</strong> If climate-controlled, this works well</li>
              <li><strong>Under-bed storage:</strong> Tire bags keep them clean</li>
              <li><strong>Professional storage:</strong> Many tire shops offer seasonal storage ($80-$150/season)</li>
              <li><strong>Family or friends:</strong> A spare garage corner works great</li>
            </ul>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Pro Tip:</strong> Use tire totes or heavy-duty garbage bags to contain any dirt 
                and protect your living space. Vacuum-seal bags aren't recommended as tires need some air circulation.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Common Tire Storage Mistakes to Avoid
            </h2>
            <ol className="list-decimal pl-5 space-y-3 text-slate-700 mb-3">
              <li>
                <strong>Storing near chemicals:</strong> Gasoline, oil, solvents, and cleaning products 
                can degrade rubber. Keep tires at least 6 feet away from chemical storage.
              </li>
              <li>
                <strong>Leaving them in the sun:</strong> Even indirect sunlight through a garage window 
                can cause UV damage over time.
              </li>
              <li>
                <strong>Using tire shine before storage:</strong> These products can dry out rubber. 
                Store tires clean and product-free.
              </li>
              <li>
                <strong>Not bagging the tires:</strong> Tire bags prevent ozone damage and keep tires 
                clean. Basic garbage bags work fine.
              </li>
              <li>
                <strong>Storing on concrete:</strong> If possible, place a barrier (wood, cardboard, 
                or carpet) between tires and cold concrete floors.
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              How Long Can Tires Be Stored?
            </h2>
            <p className="leading-relaxed mb-3">
              With proper storage, tires can be safely stored for <strong>up to 6 years</strong> from 
              their manufacture date. However, most experts recommend using tires within 10 years of 
              manufacture, regardless of appearance.
            </p>
            <p className="leading-relaxed mb-3">
              Check the <strong>DOT code</strong> on your tire sidewall. The last 4 digits indicate 
              the week and year of manufacture. For example, "2523" means the tire was made in week 25 of 2023.
            </p>
            <p className="leading-relaxed">
              Even unused tires age. If you've had tires in storage for more than 5 years, have them 
              inspected by a professional before installation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              TireBuddy's Hassle-Free Solution
            </h2>
            <p className="leading-relaxed mb-3">
              Don't want to deal with tire storage? TireBuddy makes seasonal tire changes easy. We come 
              to your location — home, condo, or office — and swap your tires professionally. Some of 
              our customers store their off-season tires with family or use professional storage services, 
              and we pick up from either location.
            </p>
            <p className="leading-relaxed">
              <strong>Starting at just $89</strong>, our mobile tire service saves you the hassle of 
              loading tires into your car and waiting at a shop. We serve Toronto, Mississauga, Brampton, 
              and the entire GTA.
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
