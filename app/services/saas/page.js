import Link from "next/link";

export default function SaasPage() {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero */}
      <section className="bg-gray-900 text-white pt-32 pb-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            SaaS
          </h1>
          <p className="mt-4 text-gray-200 max-w-2xl">
            Scalable multi-tenant SaaS platforms with secure access control,
            analytics, and billing built-in from day one.
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
          <li>Design and implementation of multi-tenant SaaS architectures.</li>
          <li>Role-based access control, plans, and permissions.</li>
          <li>Admin dashboards, analytics, and reporting.</li>
          <li>Billing, invoicing, and integration with payment providers.</li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 bg-indigo-600 text-white text-sm rounded-md"
          >
            Build your SaaS product
          </a>
          <a
            href="#case-studies"
            className="px-5 py-2.5 border text-sm rounded-md"
          >
            Explore SaaS work
          </a>
        </div>
      </main>
    </div>
  );
}
