import { Helmet } from "react-helmet-async";

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Tire Care Tips & Seasonal Advice | TireBuddy Blog</title>
        <meta
          name="description"
          content="Read expert tips on tire maintenance, seasonal care, and safety from the TireBuddy team — helping Ontario drivers stay ready for any season."
        />
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-20 text-slate-700">
        <h1 className="text-4xl font-bold mb-8 text-slate-900 text-center">
          TireBuddy Blog
        </h1>
        <p className="text-center text-slate-600 mb-10">
          Stay up-to-date with tire care advice, seasonal tips, and maintenance guides
          from our experts.
        </p>
        {/* Здесь позже можно добавить список постов */}
      </div>
    </>
  );
}

