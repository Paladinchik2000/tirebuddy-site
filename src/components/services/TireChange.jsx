import { Helmet } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function TireChangePage() {
    const PRIMARY_RED = "#E63946";

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    return (
        <>
            {/* ===== SEO TAGS ===== */}
            <Helmet>
                <title>Mobile Tire Change Service | TireBuddy Ontario</title>
                <meta
                    name="description"
                    content="rofessional mobile tire change service across Ontario. TireBuddy comes to your home or workplace — fast, reliable, and affordable seasonal tire swaps."
                />
                <meta property="og:title" content="TireBuddy Mobile Tire Change Service" />
                <meta
                    property="og:description"
                    content="TireBuddy offers professional mobile tire change services across Ontario. Starting at $89 — we come to your driveway!"
                />
                <meta property="og:image" content="https://i.imgur.com/V5pLxHA.jpeg" />
                <meta property="og:type" content="service" />
                <meta property="og:url" content="https://tirebuddy.ca/services/tire-change" />
            </Helmet>

            {/* ===== PAGE HEADER ===== */}
            <section
                className="relative flex flex-col justify-center items-center text-center text-white h-[60vh] bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://i.imgur.com/V5pLxHA.jpeg')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 px-6" data-aos="fade-up">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
                        🚗 Mobile Tire Change Service
                    </h1>
                    <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto">
                        Fast, friendly, and mobile tire service across Ontario — from tire changes to seasonal cleanup, we come to you.
                    </p>
                </div>
            </section>

            {/* ===== SERVICE DETAILS ===== */}
            <section className="max-w-5xl mx-auto px-4 py-20 text-slate-700 leading-relaxed">
                <div data-aos="fade-up" data-aos-delay="100">
                    <p className="text-lg mb-6">
                       TireBuddy provides <strong>fast, affordable, and professional tire change services</strong>, we come directly to your home or workplace anywhere in the GTA.
                      All work is completed by a{" "}
                        <strong>person using professional equipment.</strong>
                    </p>

                    <hr className="my-8 border-slate-300" />

                    {/* ===== INCLUDED ===== */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">What’s Included</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Seasonal tire swaps (summer/winter)</li>
                        <li>Professional mobile service at your location</li>
                        <li>Torque wrench tightening to manufacturer specs</li>
                        <li>Tire pressure check and adjustment</li>
                        <li>Inspection for tire wear or damage</li>
                    </ul>
                    <p className="mt-4 text-slate-600">
                        🟤 <em>Fully equipped to change, repair, or service your tires on the spot.</em>
                    </p>

                    <hr className="my-8 border-slate-300" />

                    {/* ===== PRICING ===== */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Price Breakdown</h2>
                    <div
                        className="overflow-x-auto"
                        data-aos="fade-up"
                        data-aos-delay="150"
                    >
                        <table className="w-full text-left border border-slate-300 rounded-lg overflow-hidden">
                            <thead className="bg-[#E63946] text-white">
                                <tr>
                                    <th className="py-3 px-4">Vehicle Type</th>
                                    <th className="py-3 px-4">Price</th>
                                    <th className="py-3 px-4">Description</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-700">
                                {[
                                    {
                                        size: "Sedan / Coupe",
                                        price: "$89 – $110",
                                        desc: "Standard tire swap, done on-site in your driveway or garage.",
                                    },
                                    {
                                        size: "SUV / Crossover",
                                        price: "$110 – $130",
                                        desc: "Includes full torque check and tire pressure adjustment.",
                                    },
                                    {
                                        size: "Pickup Truck / Van",
                                        price: "$130 – $160",
                                        desc: "Heavy-duty tire change, ideal for larger vehicles.",
                                    },
                                ].map((row, i) => (
                                    <tr
                                        key={row.size}
                                        className="border-t border-slate-200 hover:bg-red-50 transition"
                                        data-aos="fade-up"
                                        data-aos-delay={200 + i * 100}
                                    >
                                        <td className="py-3 px-4 font-semibold">{row.size}</td>
                                        <td className="py-3 px-4 text-[#E63946] font-bold">{row.price}</td>
                                        <td className="py-3 px-4">{row.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <hr className="my-8 border-slate-300" />

                    {/* ===== EXPECTATIONS ===== */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">What You Can Expect</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>We come to your home, condo, or workplace — no waiting in line.</li>
                        <li>Professional technicians with full equipment and tools.</li>
                        <li>Fast and friendly service — most jobs done within 30–45 minutes.</li>
                        <li>We double-check all lug nuts with a calibrated torque wrench.</li>
                    </ul>

                    <hr className="my-8 border-slate-300" />

                    {/* ===== FINAL PRICE ===== */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Final Price</h2>
                    <p>
                       The total cost may vary depending on your{" "}
                        <strong>location, vehicle type, and accessibility (e.g., underground parking or steep driveways)</strong>. Contact us for an
                        accurate quote — our team will assess and confirm before starting
                        the job.
                    </p>

                    <hr className="my-8 border-slate-300" />

                    {/* ===== NOTE ===== */}
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Note</h2>
                    <p className="mb-6">
                        We recommend scheduling your appointment early{" "}
                        <strong>
                          in the season to ensure timely service — especially before the first snowfalls.
                        </strong> 
                    </p>

                    <div
                        className="text-center mt-10"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <a
                            href="/#booking"
                            className="inline-block px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
                            style={{ background: PRIMARY_RED }}
                        >
                            🚗 Book Tire Change
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
