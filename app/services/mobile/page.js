import Link from "next/link";

export default function MobilePage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Android & iOS
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl">
            High-performance native and cross-platform mobile applications built
            for real-world scale and great user experience.
          </p>
        </div>
      </section>

      {/* Back button */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pt-6">
        <Link
          href="/#whatweoffer"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <span className="text-lg">←</span>
          <span>Back to services</span>
        </Link>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <h2 className="text-2xl font-semibold mb-4">What we do</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Native and cross-platform (e.g., React Native) app development.</li>
          <li>Offline-first architectures and reliable syncing.</li>
          <li>Push notifications, deep links, and analytics.</li>
          <li>App store deployment, optimisation, and maintenance.</li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-indigo-600 text-white text-sm rounded-md"
          >
            Plan your mobile app
          </a>
          <a
            href="#case-studies"
            className="px-5 py-2.5 border text-sm text-black rounded-md"
          >
            See mobile projects
          </a>
        </div>
      </main>
    </div>
  );
}
