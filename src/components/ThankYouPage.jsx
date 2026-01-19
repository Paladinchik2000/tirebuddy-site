import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
  const PRIMARY_RED = "#E63946";

  // ⚠️ ЗАМЕНИ ЭТУ ССЫЛКУ НА СВОЮ ИЗ GOOGLE MAPS / GOOGLE BUSINESS
  const googleReviewUrl =
    "https://share.google/rINIfUOEIoGGasWXp"; 

  return (
    <>
      <Helmet>
        <title>Thank You | TireBuddy</title>
        <meta
          name="description"
          content="Thank you for booking with TireBuddy. We appreciate your trust and look forward to serving you."
        />
      </Helmet>

      <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center px-4">
        <div className="bg-white max-w-lg w-full rounded-2xl shadow-lg border border-slate-200 p-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            Thank You for Choosing TireBuddy!
          </h1>
          <p className="text-slate-600 mb-6">
            Your request has been successfully submitted. Our team will contact you shortly
            to confirm the details of your appointment.
          </p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-2">
              Loved our service?
            </h2>
            <p className="text-slate-600 mb-4">
              It would mean a lot if you could take a moment to rate us and leave a short
              review on Google. Your feedback helps other people find a trusted service.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full font-semibold text-white shadow hover:shadow-lg transition"
              style={{ background: PRIMARY_RED }}
            >
              Leave a Google Review
            </a>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <p className="text-slate-600 mb-4">
              Want to see what else we offer?
            </p>
            <Link
              to="/services"
              className="inline-block px-6 py-2 rounded-full font-semibold border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition"
            >
              View Our Other Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

