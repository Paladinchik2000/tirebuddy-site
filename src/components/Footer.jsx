export default function Footer() {
  return (
    <footer className="bg-[#111827] text-gray-300 py-10 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        
        {/* === Logo and Info === */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">TireBuddy</h3>
          <p className="text-gray-400 leading-relaxed">
            Fast, friendly, and mobile tire service across Ontario.  
            From tire changes to seasonal cleanup — we come to you!
          </p>
          <p className="mt-4 text-sm text-gray-500">Proudly Canadian 🇨🇦</p>
        </div>

        {/* === Contact === */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              📞 <a href="tel:+14164285819" className="hover:text-white">+1 (437) 455-8729</a>
            </li>
            <li>
              📧 <a href="mailto:info@tirebuddy.ca" className="hover:text-white">info@tirebuddy.ca</a>
            </li>
            <li>📍 Greater Toronto Area, ON</li>
          </ul>
        </div>

        {/* === Socials === */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/your_tire_buddy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E63946]"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583436788962"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E63946]"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://tiktok.com/@tirebuddy.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E63946]"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>

      {/* === Bottom Copyright === */}
      <div className="mt-10 border-t border-slate-700 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TireBuddy.ca — All Rights Reserved.
      </div>
    </footer>
  );
}
