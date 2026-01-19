import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TireBuddyHome() {
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  useEffect(() => {
    if (window.location.hash === "#booking") {
      let attempts = 0;
      const scrollInterval = setInterval(() => {
        const bookingSection = document.querySelector("#booking");
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: "smooth" });
          clearInterval(scrollInterval);
        }
        attempts++;
        if (attempts > 10) clearInterval(scrollInterval);
      }, 300);
    }
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.querySelector("#booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#booking";
    }
  };

  const seoImage = "/images/logo-buddy.png";

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-dark-50 to-dark-100">
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <div className="w-24 h-24 rounded-full bg-primary-500/20"></div>
          </div>
          <img
            src={seoImage}
            alt="Loading Buddy"
            className="h-24 w-24 animate-spin-slow relative z-10"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>TireBuddy – Mobile Tire Change & Repair Service in Ontario</title>
        <meta name="description" content="Fast, family-owned mobile tire service that comes to your driveway. Reliable, friendly, and stress-free tire changes and repairs across Ontario." />
        <meta property="og:title" content="TireBuddy – Mobile Tire Change & Repair Service" />
        <meta property="og:description" content="TireBuddy provides professional mobile tire service right to your home or workplace — saving you time and hassle." />
        <meta property="og:image" content={seoImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirebuddy.ca/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TireBuddy | Ontario's Mobile Tire Experts" />
        <meta name="twitter:description" content="We come to you — for fast, professional tire changes and repairs anywhere in Ontario." />
        <meta name="twitter:image" content={seoImage} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hero-tire-change.JPG"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-dark-900/60 to-primary-900/50"></div>
          </div>

          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto" data-aos="fade-up">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6 border border-white/20">
              🇨🇦 Proudly Canadian Mobile Service
            </span>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Your Tire's
              <span className="block bg-gradient-to-r from-primary-400 via-primary-500 to-orange-400 bg-clip-text text-transparent">
                Best Friend
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Fast, friendly, and mobile tire service across Ontario — from tire changes to seasonal cleanup, we come to you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <span className="text-dark-300 text-sm">Starting at</span>
                <p className="text-5xl font-bold text-white">
                  $89
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToBooking}
                className="px-10 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <span>🚗</span> Book Tire Change
              </button>
              <Link
                to="/services"
                className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-2xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        <section data-aos="fade-up" className="py-8 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}>
          </div>
          <div className="max-w-6xl mx-auto px-4 text-center relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <img src="/icons/seniors-icon.png" alt="Seniors discount" className="w-16 h-16 rounded-xl shadow-lg" />
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">10% Seniors Discount</h2>
                <p className="text-white/80">Because experience deserves appreciation</p>
              </div>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="py-24 bg-gradient-to-b from-white to-dark-50 tire-tracks-bg overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
                Why Us
              </span>
              <h2 className="text-4xl font-heading font-bold text-dark-900">
                Why Choose <span className="text-primary-500">TireBuddy</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "/icons/fast-service-icon.png",
                  title: "Fast & Reliable Service",
                  desc: "Quick tire changes and maintenance done wherever you are — no waiting lines, no wasted time.",
                  gradient: "from-primary-500 to-orange-500",
                },
                {
                  icon: "/icons/family-icon.png",
                  title: "Family-Owned & Friendly",
                  desc: "We treat every customer like a neighbour — friendly faces, honest prices, and dependable work.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: "/icons/mobile-service-icon.png",
                  title: "We Come To You",
                  desc: "Our fully equipped mobile units handle your tires at home, work, or anywhere that's convenient.",
                  gradient: "from-green-500 to-emerald-500",
                },
              ].map((b, index) => (
                <div
                  key={b.title}
                  className="group relative bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${b.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300 p-3`}>
                    <img src={b.icon} alt={b.title} className="w-full h-full object-contain rounded-lg" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-dark-600 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div data-aos="fade-right" className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-orange-500 rounded-3xl opacity-20 blur-xl"></div>
                <img
                  src="/images/about-van.JPG"
                  alt="TireBuddy van"
                  className="relative rounded-3xl shadow-2xl"
                />
              </div>

              <div data-aos="fade-left">
                <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
                  About Us
                </span>
                <h2 className="text-4xl font-heading font-bold text-dark-900 mb-6">
                  Built on Trust.
                  <span className="block text-primary-500">Driven by Care.</span>
                </h2>
                <div className="space-y-4 text-dark-600 text-lg leading-relaxed">
                  <p>
                    At <span className="font-semibold text-primary-500">TireBuddy</span>, we believe that taking care of your car should be simple, stress-free, and personal.
                  </p>
                  <p>
                    As a proud family-operated Canadian business, we value honesty, reliability, and community. Every service we perform is done with care and attention to detail.
                  </p>
                  <p>
                    Whether it's a quick tire change, a flat repair, or seasonal cleanup — TireBuddy is here to make sure your vehicle is ready for the road ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-dark-50 to-white tire-tracks-bg tire-tracks-left overflow-hidden" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
                Testimonials
              </span>
              <h2 className="text-4xl font-heading font-bold text-dark-900">
                What Our Customers Say
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "James R.",
                  location: "Toronto",
                  text: "Fast, friendly, and professional! TireBuddy changed my tires right in my driveway — so easy and convenient.",
                  rating: 5,
                },
                {
                  name: "Amelia P.",
                  location: "Mississauga",
                  text: "Excellent experience! They arrived on time, super polite, and finished the job faster than I expected.",
                  rating: 5,
                },
                {
                  name: "Mark T.",
                  location: "Brampton",
                  text: "I love that it's a family-run business. Honest service and great attention to detail — highly recommended!",
                  rating: 5,
                },
              ].map((review, index) => (
                <div
                  key={review.name}
                  className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-dark-700 mb-6 italic text-lg leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-orange-500 flex items-center justify-center text-white font-bold">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-dark-900">{review.name}</p>
                      <p className="text-dark-500 text-sm">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white" data-aos="fade-up">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
                Service Area
              </span>
              <h2 className="text-4xl font-heading font-bold text-dark-900 mb-4">
                Proudly Serving Ontario
              </h2>
              <p className="text-dark-600 max-w-2xl mx-auto text-lg">
                TireBuddy proudly serves the Greater Toronto Area and nearby regions with fast, friendly, mobile tire service.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["Toronto", "Mississauga", "Brampton", "Aurora", "Newmarket", "King City", "Markham", "North York", "Scarborough", "Oakville", "Etobicoke"].map((city) => (
                <span key={city} className="px-4 py-2 bg-dark-50 text-dark-700 rounded-full font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-dark-100">
              <iframe
                title="TireBuddy Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92272.67448483084!2d-79.6121673275408!3d43.65322600609495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d3d3b76a7f%3A0x37f68c3b1b2f0f19!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <section id="booking" className="py-24 bg-gradient-to-b from-dark-50 to-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-4">
                Book Now
              </span>
              <h2 className="text-4xl font-heading font-bold text-dark-900">
                Book an Appointment
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card">
              <form
                action="https://formspree.io/f/mnnondng"
                method="POST"
                className="space-y-6"
                onSubmit={() => {
                  if (window.gtag) {
                    window.gtag("event", "conversion", {
                      send_to: "AW-17700861953/TQlXCL2blbsbEIHwtvhB",
                      value: 1.0,
                      currency: "CAD",
                    });
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="w-full rounded-xl border-2 border-dark-200 px-5 py-4 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="w-full rounded-xl border-2 border-dark-200 px-5 py-4 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <select
                  name="service"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full rounded-xl border-2 border-dark-200 px-5 py-4 bg-white focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a Service</option>
                  <option value="Tire Change">Tire Change</option>
                  <option value="Punctured Tire Repair">Punctured Tire Repair</option>
                  <option value="Gutter Cleaning">Gutter Cleaning</option>
                  <option value="Fall Cleanup">Fall Cleanup</option>
                  <option value="Snow Plowing">Snow Shoveling</option>
                </select>

                {selectedService === "Tire Change" && (
                  <div className="p-4 bg-primary-50 border-2 border-primary-200 rounded-xl">
                    <p className="text-primary-700 font-medium">
                      <strong>Notice:</strong> We don't provide off-rim service. Please look for off-rim mobile tire changes or check with Costco or Canadian Tire.
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="vehicle_make"
                    placeholder="Vehicle Make (optional)"
                    className="w-full rounded-xl border-2 border-dark-200 px-5 py-4 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="vehicle_model"
                    placeholder="Vehicle Model (optional)"
                    className="w-full rounded-xl border-2 border-dark-200 px-5 py-4 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="address"
                    placeholder="Service Address"
                    required
                    className="w-full rounded-xl border-2 border-dark-200 px-5 py-4 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    className="w-full rounded-xl border-2 border-dark-200 px-5 py-4 focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Additional Details (optional)"
                  rows={4}
                  className="w-full rounded-xl border-2 border-dark-200 px-5 py-4 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </section>

        <button
          onClick={scrollToBooking}
          className="fixed bottom-6 right-6 z-50 md:hidden bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center gap-2"
        >
          <span>📅</span> Book Now
        </button>
      </div>
    </>
  );
}
