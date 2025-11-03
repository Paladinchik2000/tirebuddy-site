import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const PRIMARY_RED = "#E63946";

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
  }, []);

  const services = [
    {
      title: "Tire Change",
      desc: "Seasonal tire swaps done right in your driveway — fast, clean, and stress-free.",
      img: "https://i.imgur.com/FUlWaht.jpeg",
      price: "$79",
    },
    {
      title: "Punctured Tire Repair",
      desc: "We fix flats on-site, getting you back on the road safely in no time.",
      img: "https://i.imgur.com/lGNeHc3.jpeg",
      price: "$49",
    },
    {
      title: "Gutter Cleaning",
      desc: "Keep your gutters clear and your home safe from water damage with our seasonal service.",
      img: "https://i.imgur.com/zU6jmjk.jpeg",
      price: "$99",
    },
    {
      title: "Fall Cleanup",
      desc: "We take care of leaves and debris so your yard stays neat and ready for winter.",
      img: "https://i.imgur.com/UZybBYI.jpeg",
      price: "$89",
      link: "/services/fall-cleanup",
    },
    {
      title: "Snow Plowing",
      desc: "Reliable and fast driveway snow removal — stay safe and mobile all winter long.",
      img: "https://i.imgur.com/ZZd6J5C.jpeg",
      price: "$129",
    },
  ];

  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>Mobile Tire Services in Ontario | TireBuddy</title>
        <meta
          name="description"
          content="Explore TireBuddy’s full range of mobile tire services — tire change, puncture repair, snow plowing, and seasonal cleanup. We come to you anywhere in Ontario."
        />
        <meta property="og:title" content="TireBuddy Services – Mobile Tire Change & More" />
        <meta
          property="og:description"
          content="Fast, mobile tire service at your driveway. From tire changes to snow plowing — TireBuddy keeps Ontario drivers moving year-round."
        />
        <meta property="og:image" content="https://i.imgur.com/FUlWaht.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirebuddy.ca/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TireBuddy – Mobile Tire Services" />
        <meta
          name="twitter:description"
          content="Your reliable mobile tire change and maintenance service across Ontario."
        />
        <meta name="twitter:image" content="https://i.imgur.com/FUlWaht.jpeg" />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-slate-700">
        <div data-aos="fade-up" className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            At TireBuddy, we make it easy to handle your seasonal and maintenance needs — right at your driveway.
            From tires to cleanup, we’re your reliable partner year-round.
          </p>
        </div>

        {/* ===== SERVICE CARDS ===== */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1 border border-slate-200"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h2>
                  <p className="text-slate-600 mb-3">{service.desc}</p>
                  <p className="text-2xl font-extrabold text-[#E63946] mb-4">{service.price}</p>
                </div>

                <div className="flex flex-wrap justify-start gap-3 mt-auto">
                  <a
                    href="/#booking"
                    className="inline-block px-5 py-2 rounded-full text-white font-semibold shadow hover:shadow-lg transition"
                    style={{ background: PRIMARY_RED }}
                  >
                    Book Now
                  </a>

                  {/* Only show "Read More" if service has a link */}
                  {service.link && (
                    <Link
                      to={service.link}
                      className="inline-block px-5 py-2 rounded-full font-semibold border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition"
                    >
                      Read More
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}



