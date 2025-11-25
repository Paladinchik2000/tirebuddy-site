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
      slug: "snow-shoveling-before-we-arrive",
      title: "Before We Arrive: How to Prepare for Your Snow Shoveling",
      tag: "Snow Shoveling",
      date: "February 2025",
      readTime: "4 min read",
      excerpt:
        "A few simple things you can do before TireBuddy arrives to clear the snow – move cars, open gates, and let us know about hidden items under the snow.",
      highlight: "❄️",
    },
    // сюда потом легко добавлять новые посты
    // {
    //   slug: "second-post-slug",
    //   title: "...",
    //   tag: "...",
    //   date: "...",
    //   readTime: "...",
    //   excerpt: "...",
    //   highlight: "🧹",
    // },
  ];

  return (
    <>
      <Helmet>
        <title>Blog | TireBuddy Tips & Seasonal Advice</title>
        <meta
          name="description"
          content="Read TireBuddy blog tips about snow shoveling, tire care, seasonal cleanup, and how to prepare your home and car for Ontario weather."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-20 text-slate-700">
        {/* Заголовок страницы */}
        <header
          className="mb-12 text-center"
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            TireBuddy Blog
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Practical tips for Ontario homeowners and drivers — from snow
            shoveling and winter prep to seasonal tire care.
          </p>
        </header>

        {/* Сетка карточек – две колонки на больших экранах */}
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
                    {post.highlight} {post.tag}
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
