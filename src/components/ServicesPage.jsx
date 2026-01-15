import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.querySelector("#booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#booking";
    }
  };

  const services = [
    {
      id: "tire-change",
      icon: "🚗",
      title: "Mobile Tire Change",
      description: "Fast, reliable, and professional tire change service — done right at your home or workplace.",
      price: "$89",
      image: "/images/service-tire-change.jpg",
      link: "/services/tire-change",
      gradient: "from-primary-500 to-orange-500",
    },
    {
      id: "snow-shoveling",
      icon: "❄️",
      title: "Snow Shoveling",
      description: "Keep your yard clean and safe this winter with our professional snow shoveling service.",
      price: "$80",
      image: "/images/snow-shoveling.jpg",
      link: "/services/snow-shoveling",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "fall-cleanup",
      icon: "🍂",
      title: "Fall Cleanup",
      description: "Keep your yard clean and safe this fall with our professional leaf and debris cleanup service.",
      price: "$170",
      image: "/images/service-fall-cleanup.jpg",
      link: "/services/fall-cleanup",
      gradient: "from-amber-500 to-orange-600",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | TireBuddy</title>
        <meta
          name="description"
          content="Explore TireBuddy's professional mobile services — tire change, repair, seasonal cleanup, and snow removal across Ontario."
        />
      </Helmet>

      <div className="min-h-screen py-20 tire-tracks-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark-900 mb-6">
              Our <span className="text-primary-500">Services</span>
            </h1>
            <p className="text-dark-600 max-w-2xl mx-auto text-lg">
              From seasonal cleanup to tire change — TireBuddy keeps your home and vehicle ready for any season.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl transform group-hover:rotate-12 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-heading font-bold text-dark-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-dark-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-sm text-dark-500">Starting at</span>
                      <p className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={scrollToBooking}
                      className="flex-1 px-5 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300 text-center"
                    >
                      Book Now
                    </button>
                    <Link
                      to={service.link}
                      className="px-5 py-3 bg-dark-50 text-dark-700 font-semibold rounded-xl hover:bg-dark-100 transition-all duration-300"
                    >
                      Details
                    </Link>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center" data-aos="fade-up">
            <div className="inline-block p-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl">
              <h3 className="text-2xl font-heading font-bold text-dark-900 mb-3">
                Need a Custom Service?
              </h3>
              <p className="text-dark-600 mb-6">
                Contact us for special requests or bulk services
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
