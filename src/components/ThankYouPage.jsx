import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ThankYouPage() {
  const googleReviewUrl = "https://maps.app.goo.gl/f9f8xDphB4Xii9zu6?g_st=ic";

  return (
    <>
      <Helmet>
        <title>Thank You | TireBuddy</title>
        <meta
          name="description"
          content="Thank you for contacting TireBuddy. We appreciate your trust and look forward to serving you."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-dark-50 via-white to-primary-50 flex items-center justify-center px-4 py-20">
        <div className="bg-white max-w-lg w-full rounded-3xl shadow-card border border-dark-100 p-10 text-center" data-aos="fade-up">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-heading font-bold text-dark-900 mb-4">
            Thanks!
          </h1>
          <p className="text-dark-600 text-lg mb-8">
            Your message has been sent successfully. We'll reply to your email soon.
          </p>

          <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-orange-50 rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h2 className="text-xl font-semibold text-dark-900">
                Loved our service?
              </h2>
            </div>
            <p className="text-dark-600 mb-5">
              Your feedback helps us grow! Leave a quick review on Google.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-xl shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Leave Your Review
            </a>
          </div>

          <div className="border-t border-dark-100 pt-8">
            <p className="text-dark-600 mb-5">
              Looking for more? Check out everything we offer!
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-dark-50 text-dark-800 font-bold rounded-xl border-2 border-dark-200 hover:bg-dark-100 hover:border-primary-300 hover:text-primary-600 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              See Our Other Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
