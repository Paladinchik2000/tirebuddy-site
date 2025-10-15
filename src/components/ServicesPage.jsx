export default function ServicesPage() {
  const PRIMARY_RED = "#E63946";

  const services = [
    {
      title: "Tire Change",
      desc: "Seasonal tire swaps done right in your driveway — fast, clean, and stress-free.",
      img: "https://images.unsplash.com/photo-1607860108855-1b1e3b7f1f7e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Punctured Tire Repair",
      desc: "We fix flats on-site, getting you back on the road safely in no time.",
      img: "https://images.unsplash.com/photo-1607860175258-bd71c1e2d8b7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Gutter Cleaning",
      desc: "Keep your gutters clear and your home safe from water damage with our seasonal service.",
      img: "https://images.unsplash.com/photo-1615732394743-f9ef10f3774f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Fall Cleanup",
      desc: "We take care of leaves and debris so your yard stays neat and ready for winter.",
      img: "https://images.unsplash.com/photo-1602956709386-cab3f9a4d203?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Snow Plowing",
      desc: "Reliable and fast driveway snow removal — stay safe and mobile all winter long.",
      img: "https://images.unsplash.com/photo-1615209639561-9a08e85e4d8a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-slate-700">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          At TireBuddy, we make it easy to handle your seasonal and maintenance needs — right at your driveway.
          From tires to cleanup, we’re your reliable partner year-round.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition transform hover:-translate-y-1 border border-slate-200"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-2">
                {service.title}
              </h2>
              <p className="text-slate-600 mb-4">{service.desc}</p>
              <a
                href="/#booking"
                className="inline-block px-5 py-2 rounded-full text-white font-semibold shadow-sm hover:shadow transition"
                style={{ background: PRIMARY_RED }}
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

