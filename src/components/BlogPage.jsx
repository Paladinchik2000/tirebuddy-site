import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BlogPage() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  const posts = [
    {
      slug: "choosing-right-tires-ontario",
      title: "How to Choose the Right Tires for Your Vehicle in Ontario",
      tag: "Tire Guide",
      date: "January 2026",
      readTime: "8 min read",
      excerpt:
        "Complete guide to choosing the right tires for Ontario roads. Learn about tire sizes, types, and what to consider for GTA driving conditions.",
      icon: "/icons/tire-change-icon.png",
    },
    {
      slug: "tire-storage-guide-canada",
      title: "Complete Guide to Seasonal Tire Storage in Canada",
      tag: "Tire Care",
      date: "January 2026",
      readTime: "7 min read",
      excerpt:
        "Learn how to properly store your seasonal tires in Ontario. Expert tips on storage locations, preparation, and common mistakes to avoid.",
      icon: "/icons/tools-icon.png",
    },
    {
      slug: "tire-safety-warning-signs",
      title: "5 Warning Signs You Need New Tires",
      tag: "Tire Safety",
      date: "January 2026",
      readTime: "6 min read",
      excerpt:
        "Learn the 5 critical warning signs that indicate you need new tires — from tread wear to sidewall cracks. Don't ignore these red flags!",
      icon: "/icons/tire-change-icon.png",
    },
    {
      slug: "winter-vs-all-season-tires",
      title: "Winter Tires vs All-Season: Ontario Driver's Guide",
      tag: "Tire Guide",
      date: "January 2026",
      readTime: "7 min read",
      excerpt:
        "Should you use winter tires or all-season tires in Ontario? Compare performance, safety, and cost for GTA driving conditions.",
      icon: "/icons/snow-shoveling-icon.png",
    },
    {
      slug: "snow-shoveling-before-we-arrive",
      title: "Before We Arrive: How to Prepare for Your Snow Shoveling",
      tag: "Snow Shoveling",
      date: "February 2025",
      readTime: "4 min read",
      excerpt:
        "A few simple things you can do before TireBuddy arrives to clear the snow - move cars, open gates, and let us know about hidden items under the snow.",
      icon: "/icons/snow-shoveling-icon.png",
    },
    {
      slug: "mobile-tire-change-ontario",
      title: "How to Get Ready for Your Mobile Tire Change Appointment",
      tag: "Tire Change",
      date: "March 2025",
      readTime: "5 min read",
      excerpt:
        "Planning a mobile tire change at home or work? Here's what to prepare - from parking position and tire type to lug nut keys and wheel access.",
      icon: "/icons/tire-change-icon.png",
    },
    {
      slug: "when-to-switch-to-winter-tires-ontario",
      title: "When Should You Switch to Winter Tires in Ontario?",
      tag: "Winter Tires",
      date: "October 2025",
      readTime: "6 min read",
      excerpt:
        "Not sure when to change to winter tires in Ontario? Learn about the 7C rule, timing for the GTA, and why you shouldn't wait for the first snowstorm.",
      icon: "/icons/tools-icon.png",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog | TireBuddy Tips & Seasonal Advice</title>
        <meta
          name="description"
          content="Read TireBuddy blog tips about snow shoveling, tire care, seasonal cleanup, and how to prepare your home and car for Ontario weather."
        />
        <meta property="og:title" content="TireBuddy Blog" />
        <meta
          property="og:description"
          content="Practical tips for Ontario homeowners and drivers - from snow shoveling and winter prep to seasonal tire care."
        />
        <meta property="og:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirebuddy.ca/blog" />
        <link rel="canonical" href="https://tirebuddy.ca/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TireBuddy Blog | Tire Tips & Seasonal Advice for Ontario" />
        <meta name="twitter:description" content="Read TireBuddy blog tips about tire care, snow shoveling, and seasonal home maintenance for Ontario drivers." />
        <meta name="twitter:image" content="https://tirebuddy.ca/images/logo-buddy.png" />
      </Helmet>
      
      <div className="max-w-6xl mx-auto px-4 py-20 text-slate-700">
        <header className="mb-12 text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            TireBuddy Blog
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Practical tips for Ontario homeowners and drivers - from snow
            shoveling and winter prep to seasonal tire care.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-50 text-[#E63946] font-semibold text-xs">
                    <img src={post.icon} alt="" className="w-4 h-4" /> {post.tag}
                  </span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 mb-4">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-2 flex justify-between items-center">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#E63946] font-semibold hover:underline"
                >
                  Read more
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
