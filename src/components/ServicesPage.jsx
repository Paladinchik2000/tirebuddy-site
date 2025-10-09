export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6 text-slate-900">Our Services</h1>
      <p className="text-slate-700 mb-8 max-w-2xl">
        TireBuddy offers mobile tire change, repair, and seasonal home care
        services across the Greater Toronto Area.
      </p>
      <ul className="space-y-4 text-slate-700">
        <li>🚗 Tire Change (Seasonal & Mobile)</li>
        <li>🔧 Punctured Tire Repair</li>
        <li>🧹 Gutter Cleaning</li>
        <li>🍂 Fall Cleanup</li>
        <li>❄️ Snow Plowing</li>
      </ul>
    </div>
  );
}
