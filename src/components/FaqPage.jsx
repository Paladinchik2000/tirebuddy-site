import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const PRIMARY_RED = "#E63946";

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How does TireBuddy’s mobile tire service work?",
      answer:
        "It’s simple! Just book an appointment online or by phone. Our TireBuddy van comes directly to your driveway or workplace — fully equipped to change, repair, or service your tires on the spot. No shop visits or waiting rooms needed.",
    },
    {
      question: "Do I need to provide any tools or equipment?",
      answer:
        "Nope! We bring everything we need — from jacks and air tools to balancing equipment. All we need is access to your vehicle and a safe parking space to work in.",
    },
    {
      question: "Can TireBuddy repair a punctured or flat tire on-site?",
      answer:
        "Yes! We specialize in on-site puncture repairs. We inspect the tire, remove the object, and patch or plug the puncture — all while you relax at home or work.",
    },
    {
      question: "Do you handle tire storage for winter and summer seasons?",
      answer:
        "Currently, we don’t provide long-term tire storage — but we’re working to add this service soon. For now, we’ll gladly help you safely load and stack your tires after installation.",
    },
    {
      question: "What areas in Ontario do you serve?",
      answer:
        "We’re proudly based in Ontario and currently serve local communities around the GTA — including Toronto, Mississauga, Brampton, and nearby regions. If you’re unsure, just reach out!",
    },
    {
      question: "What other seasonal services do you offer?",
      answer:
        "Besides tire work, we also provide Gutter Cleaning, Fall Cleanup, and Snow Plowing services — so your home stays safe and ready for every season.",
    },
    {
      question: "How can I pay for your services?",
      answer:
        "We accept all major payment methods — including debit, credit, and e-transfer. You’ll receive a digital receipt right after your service is complete.",
    },
    {
      question: "Is there a senior discount available?",
      answer:
        "Yes! We proudly offer a 10% discount to all seniors — because we believe great service should come with appreciation for experience and trust.",
    },
  ];

  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>FAQ | TireBuddy – Mobile Tire Service Ontario</title>
        <meta
          name="description"
          content="Find answers to common questions about TireBuddy’s mobile tire service in Ontario. Learn how our on-site tire change, repair, and seasonal services work."
        />

        {/* Open Graph for Facebook, LinkedIn, etc. */}
        <meta property="og:title" content="TireBuddy FAQ | Mobile Tire Service Ontario" />
        <meta
          property="og:description"
          content="Find out everything about TireBuddy’s mobile tire change and repair services. We bring professional tire service right to your driveway."
        />
        <meta property="og:image" content="https://i.imgur.com/4YFSmoN.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tirebuddy.ca/faq" />

        {/* Twitter Card for sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TireBuddy FAQ | Ontario Mobile Tire Experts" />
        <meta
          name="twitter:description"
          content="Have questions about our services? TireBuddy answers your most common tire and seasonal service questions here."
        />
        <meta name="twitter:image" content="https://i.imgur.com/4YFSmoN.png" />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
      <div className="min-h-screen bg-[#F4F4F4]">
        {/* ===== HEADER SECTION ===== */}
        <section className="bg-[#E63946] text-white text-center py-10 shadow-md">
          <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            Answers to the most common questions about TireBuddy’s mobile service.
          </p>
        </section>

        {/* ===== FAQ CONTENT ===== */}
        <section className="max-w-4xl mx-auto px-4 py-16">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 transition hover:shadow-md cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-lg font-semibold ${
                      openIndex === index ? "text-[#E63946]" : "text-slate-900"
                    }`}
                  >
                    {item.question}
                  </h3>
                  <span className="text-2xl text-slate-400">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-slate-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
