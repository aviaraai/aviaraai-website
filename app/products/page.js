import Link from "next/link";

export const metadata = {
  title: "Products — AviaraAI",
  description: "The Innovations and Products developed by AviaraAI",
};

export default function ProductsPage() {
  const products = [
    {
      title: "Godhaar — AI Cattle Identification",
      description:
        "AI-powered biometric identification system using muzzle recognition for cattle registration, welfare tracking, and verification.",
      points: [
        "AI-based muzzle identification",
        "Farmer & beneficiary onboarding",
        "API-ready backend",
        "Used by enterprises & govt agencies",
      ],
      status: "In Deployment",
      tag: "Flagship Product",
      image: "/cow_cover.jpeg",
      path: "/projects/godhaar", // 👈 Added path
    },
    {
      title: "AI SmartShelf — Library Automation",
      description:
        "Real-time RFID + AI library automation system that tracks books, manages shelves, and provides smart analytics.",
      points: [
        "RFID-powered book tracking",
        "Smart shelf status dashboard",
        "Auto issue/return workflow",
        "Stock & overdue alerts",
      ],
      status: "In Development",
      tag: "EdTech Product",
      image: "/smartshelf_product.png",
      path: "/products/smartshelf", // 👈 Added path
    },
    {
      title: "FarmAssist — Farmer Support Platform",
      description:
        "AI chatbot + automation system helping farmers with subsidy guidance, crop insights, and workflow management.",
      points: [
        "24/7 multi-language farmer chatbot",
        "Subsidy eligibility assistant",
        "Crop advisory using ML",
        "Govt workflow automation",
      ],
      status: "Coming Soon",
      tag: "AgriTech Product",
      image: "/farmassist_product.png",
      path: "/products/farmassist", // 👈 Added path
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-32 pb-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">
            Our Products
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">Explore Our Products</h1>
          <p className="mt-4 text-gray-300 max-w-2xl">
            Discover the powerful solutions our team is building — SaaS tools,
            AI innovations, and next-gen platforms.
          </p>
        </div>
      </section>

      {/* Products List */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 py-16 space-y-16">
        {products.map((product, index) => (
          <section
            key={index}
            className="grid grid-cols-1 md:grid-cols-[1.2fr,1.8fr] gap-8 items-center"
          >
            {/* Left: Product Image Card */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transform-gpu hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 ease-out">
              <div className="relative h-48 md:h-56 w-full bg-gray-50">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              <div className="p-5">
                {/* <p className="text-sm text-gray-500">Product preview</p> */}
              </div>
            </div>

            {/* Right: Product Details */}
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold mb-3">
                {product.tag}
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {product.title}
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>

              <ul className="list-disc list-inside text-gray-700 text-sm md:text-base space-y-2 mb-5">
                {product.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 items-center">
                <Link
                  href={product.path}
                  className="px-5 py-2.5 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
                >
                  Learn More
                </Link>

                <span className="text-xs md:text-sm text-gray-500">
                  Status:{" "}
                  <span className="font-semibold text-gray-700">
                    {product.status}
                  </span>
                </span>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
