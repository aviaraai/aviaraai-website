"use client";

import Link from "next/link";
import Image from "next/image";

export default function GodhaarPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/cow_background.jpeg"
            alt="Cattle Farm Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={85}
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content - Left Aligned */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-2xl animate-fade-in">
            {/* <div className="text-7xl mb-6"></div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              GODHAAR
            </h1>

            <p className="text-2xl md:text-3xl text-blue-300 font-sora mb-6">
              THE FUTURE OF LIVESTOCK IDENTIFICATION
            </p>

            <p className="text-xl md:text-2xl font-sora text-gray-200 mb-10">
              Revolutionizing Livestock Management with AI-Powered Biometric
              muzzle print recognition technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#about"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-sora text-lg hover:bg-blue-700 transition-all inline-block text-center"
              >
                Learn More
              </a>
              {/* <a
                href="mailto:contact@aviaraai.com"
                className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-sora text-lg hover:bg-white/10 transition-all inline-block text-center"
              >
                Contact Us
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - TEXT LEFT, IMAGE RIGHT */}
      <section id="about" className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* TEXT - LEFT */}
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-sora text-gray-900 mb-6">
                What is Godhaar?
              </h2>
              <p className="text-lg text-gray-600 font-sora mb-6 leading-relaxed">
                Godhaar is an advanced AI-powered cattle management system that
                uses cutting-edge muzzle recognition technology to identify and
                track individual cattle.
              </p>
              <p className="text-lg text-gray-600 font-sora mb-6 leading-relaxed">
                Just like human fingerprints, each cow has a unique muzzle
                pattern that our system can recognize with 95% accuracy in just
                2 seconds.
              </p>

              {/* Stats Row */}
              <div className="flex gap-6 mt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text mb-2">
                    95%
                  </div>
                  <p className="text-sm text-gray-500">Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text mb-2">
                    2s
                  </div>
                  <p className="text-sm text-gray-500">ID Time</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text mb-2">
                    1000+
                  </div>
                  <p className="text-sm text-gray-500">Cattle</p>
                </div>
              </div>
            </div>

            {/* IMAGE - RIGHT */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-md aspect-square flex items-center justify-center overflow-hidden border border-gray-200 relative">
                <Image
                  src="/indian-cow.jpg"
                  alt="Godhaar Cattle Recognition"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover rounded-2xl bg-white"
                  loading="lazy"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION - TEXT ONLY (Corporate Style, Wider Layout) */}
      <section className="py-28 bg-white text-black">
        <div className="max-w-6xl mx-auto px-10 text-center">
          <h2 className="text-5xl md:text-6xl font-sora text-gray-900 mb-8">
            The Problems with Traditional Methods
          </h2>

          <p className="text-lg md:text-xl text-gray-600 font-sora mb-16 leading-relaxed max-w-3xl mx-auto">
            Traditional cattle identification and record-keeping rely heavily on
            manual tagging, paper logs, and human observation — methods that are
            inefficient, error-prone, and difficult to scale for modern
            livestock operations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 text-left">
            {/* Time-Consuming */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Time-Consuming
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Manual identification can take minutes per animal, slowing down
                operations and reducing productivity.
              </p>
            </div>

            {/* Lost Records */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Lost Records
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Paper logs are hard to maintain and often lead to missing or
                incomplete data — with no reliable health traceability.
              </p>
            </div>

            {/* Human Error */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Human Error
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Misidentification can lead to incorrect treatments, breeding
                mistakes, and long-term record inaccuracies.
              </p>
            </div>

            {/* Costly Mistakes */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Costly Mistakes
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Errors in identification or documentation often result in costly
                veterinary emergencies and reduced farm efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION - TEXT ONLY (Corporate Style) */}
      <section id="features" className="py-28 bg-white text-black">
        <div className="max-w-6xl mx-auto px-10 text-center">
          <h2 className="text-5xl md:text-6xl font-sora text-gray-900 mb-8">
            Our AI-Powered Solution
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-sora mb-16 leading-relaxed max-w-3xl mx-auto">
            We combine artificial intelligence and precision biometrics to bring
            modern, accurate, and scalable cattle identification — empowering
            farmers with technology that saves time, reduces errors, and
            improves herd management efficiency.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 text-left">
            {/* Biometric Accuracy */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Biometric Accuracy
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                AI identifies cattle in 2 seconds with 95% accuracy using unique
                muzzle patterns, ensuring precision and reliability in
                identification.
              </p>
            </div>

            {/* No More Tags */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                No More Tags
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                A contactless and humane solution — no physical tags, no
                collars, no risk of tampering or injury.
              </p>
            </div>

            {/* Offline Ready */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Offline Ready
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Designed for real-world conditions — works seamlessly even in
                remote areas without internet connectivity.
              </p>
            </div>

            {/* Farmer Friendly */}
            <div className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">
                Farmer Friendly
              </h4>
              <p className="text-gray-600 text-lg leading-relaxed">
                Built for simplicity — intuitive design, secure data handling,
                and local language support for effortless adoption by farmers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - IMAGE LEFT, TEXT RIGHT */}
      <section id="how-it-works" className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sora text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From capture to certification in seconds. Experience the seamless
              journey of our Godhaar Process in 5 easy steps.
            </p>
          </div>

          <div className="space-y-24">
            {/* STEP 1 - IMAGE LEFT, TEXT RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl overflow-hidden aspect-square">
                <Image
                  src="/capture_muzzle.jpeg"
                  alt="Capture Muzzle"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div>
                <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
                  <span className="text-blue-700 font-bold">STEP 1</span>
                </div>
                <h3 className="text-3xl font-sora text-gray-900 mb-4">
                  Capture Muzzle Image
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Simply take a photo of the cattle's muzzle using your
                  smartphone camera. Our app guides you to capture the perfect
                  angle for best results.
                </p>
              </div>
            </div>

            {/* STEP 2 - TEXT LEFT, IMAGE RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
                  <span className="text-blue-700 font-bold">STEP 2</span>
                </div>
                <h3 className="text-3xl font-sora text-gray-900 mb-4">
                  AI Processing
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our advanced AI analyzes the unique muzzle pattern in
                  milliseconds. The deep learning model processes thousands of
                  data points to create a unique signature.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl overflow-hidden aspect-square">
                  <Image
                  src="/aipowered.jpeg"
                  alt="AI Processing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
                </div>
              </div>
            </div>

            {/* STEP 3 - IMAGE LEFT, TEXT RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl overflow-hidden aspect-square">
                <Image
                  src="/print_matching.jpeg"
                  alt="Pattern Matching"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div>
                <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
                  <span className="text-blue-700 font-bold">STEP 3</span>
                </div>
                <h3 className="text-3xl font-sora text-gray-900 mb-4">
                  Pattern Matching
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The system compares the pattern against our database and
                  identifies the cattle within 2 seconds with 95% accuracy. If
                  it's a new animal, you can register it instantly.
                </p>
              </div>
            </div>

            {/* STEP 4 - TEXT LEFT, IMAGE RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
                  <span className="text-blue-700 font-bold">STEP 4</span>
                </div>
                <h3 className="text-3xl font-sora text-gray-900 mb-4">
                  Access Full Profile
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  View complete health records, breeding history, milk
                  production data, and vaccination schedules. Update any
                  information with just a few taps.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl overflow-hidden aspect-square">
                  <Image
                  src="/view_profile.png"
                  alt="View Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
                </div>
              </div>
            </div>

            {/* STEP 5 - IMAGE LEFT, TEXT RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl overflow-hidden aspect-square">
                  <Image
                  src="/godhaar_card.jpeg"
                  alt="Digital Certification"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
                </div>
              </div>
              <div>
                <div className="inline-block px-6 py-2 bg-blue-100 rounded-full mb-4">
                  <span className="text-blue-700 font-bold">STEP 5</span>
                </div>
                <h3 className="text-3xl font-sora text-gray-900 mb-4">
                  Digital Certification
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Download digital certificates for your cattle. Each
                  certificate includes animal details, owner info, and a unique
                  QR code for quick verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-sora text-gray-900 text-center mb-4">
            Why Choose Godhaar?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to manage your herd efficiently
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Image
                  src="/mobile.png"
                  alt="Mobile Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-sora text-gray-900 mb-3">
                Mobile-First Design
              </h3>
              <p className="text-gray-600">
                Easy-to-use mobile app for iOS and Android devices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Image
                  src="/records.png"
                  alt="Records Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-sora text-gray-900 mb-3">
                Health Records
              </h3>
              <p className="text-gray-600">
                Track vaccinations, treatments, and medical history.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Image
                  src="/bell.png"
                  alt="Smart Alerts Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-sora text-gray-900 mb-3">
                Smart Alerts
              </h3>
              <p className="text-gray-600">
                Reminders for vaccinations and breeding schedules.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Image
                  src="/analysis.png"
                  alt="Analytics Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-sora text-gray-900 mb-3">
                Analytics
              </h3>
              <p className="text-gray-600">
                Insights and reports to optimize cattle management.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Image
                  src="/milk.png"
                  alt="Milk Production Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-sora text-gray-900 mb-3">
                Milk Production
              </h3>
              <p className="text-gray-600">
                Track daily milk yield for each animal.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <Image
                  src="/cow_logo.png"
                  alt="Breeding History Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                  loading="lazy"
                  quality={85}
                />
              </div>
              <h3 className="text-xl font-sora text-gray-900 mb-3">
                Breeding History
              </h3>
              <p className="text-gray-600">
                Track your cattle’s information all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS - IMAGE LEFT, TEXT RIGHT */}
      <section id="benefits" className="py-20 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* IMAGE / METRIC BOX - LEFT */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl overflow-hidden aspect-square relative">
  <Image
                  src="/Brain_2.jpeg"
                  alt="Brain"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  quality={85}
                />
</div>



            {/* TEXT - RIGHT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-sora text-gray-900 mb-6">
                Technology
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-xl font-sora text-gray-900 mb-2">
                    Deep Neural Networks
                  </h4>
                  <p className="text-gray-600">
                    Advanced convolutional neural networks trained on millions
                    of muzzle patterns achieve superhuman pattern recognition
                    accuracy.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-xl font-sora text-gray-900 mb-2">
                    Cloud-Native Architecture
                  </h4>
                  <p className="text-gray-600">
                    Scalable cloud infrastructure ensures instant processing and
                    99.99% uptime for mission-critical livestock operations.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-xl font-sora text-gray-900 mb-2">
                    Mobile App
                  </h4>
                  <p className="text-gray-600">
                    Farmers can use our app to scan cattle, register them, and
                    manage everything directly from their phone.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h4 className="text-xl font-sora text-gray-900 mb-2">
                    Easy-to-Use Dashboard
                  </h4>
                  <p className="text-gray-600">
                    Officials get a simple dashboard to check cattle records,
                    scan history, and all important farm updates in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Making a Difference
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text mb-3">
                1000+
              </h3>
              <p className="text-xl text-gray-600">Cattle Identified</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text mb-3">
                95%
              </h3>
              <p className="text-xl text-gray-600">Recognition Accuracy</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text mb-3">
                3
              </h3>
              <p className="text-xl text-gray-600">Active Deployments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Industry with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let us discuss how our solutions can help solve your challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </Link>

            <Link
              href="/products"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
