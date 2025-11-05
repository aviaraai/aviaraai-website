'use client'

import Link from 'next/link'

export default function GodhaarPage() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      {/* Product-specific hero with branding */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-brand-teal/10 via-white to-muted-blue/5">
        {/* Large Background Emoji - Decorative */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[20rem] opacity-5">
          🐄
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          {/* Product Badge */}
          <span className="inline-block px-6 py-2 bg-brand-teal text-white rounded-full font-semibold mb-6">
            🐄 AI-Powered Solution
          </span>

          {/* Product Name */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-deep-navy mb-4">
            Godhaar
          </h1>

          {/* Product Tagline */}
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-teal mb-6">
            Smart Cattle Management Powered by AI
          </h2>

          {/* Product Description */}
          <p className="text-xl md:text-2xl text-secondary-text mb-10 max-w-3xl mx-auto">
            Identify, track, and manage cattle using cutting-edge muzzle recognition technology
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="bg-brand-teal text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transform hover:-translate-y-1 hover:shadow-brand transition-all"
            >
              Watch Demo
            </a>
            <a
              href="#features"
              className="bg-transparent text-deep-navy border-2 border-deep-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-deep-navy hover:text-white transform hover:-translate-y-1 transition-all"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM SECTION ==================== */}
      {/* Explains the pain points farmers face */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-6">
            The Challenge Farmers Face
          </h2>

          {/* Section Description */}
          <p className="text-xl text-secondary-text text-center mb-12 max-w-4xl mx-auto">
            Traditional cattle management relies on physical tags, manual record-keeping, and visual identification, leading to several critical issues:
          </p>

          {/* Problem Cards Grid - 4 Problems */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Problem 1: Lost Tags */}
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-3xl flex-shrink-0">❌</span>
              <div>
                <h3 className="text-xl font-bold text-deep-navy mb-2">Lost or Damaged Tags</h3>
                <p className="text-secondary-text">Physical ear tags fall off or become unreadable</p>
              </div>
            </div>

            {/* Problem 2: Inaccurate Records */}
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-3xl flex-shrink-0">❌</span>
              <div>
                <h3 className="text-xl font-bold text-deep-navy mb-2">Inaccurate Records</h3>
                <p className="text-secondary-text">Manual tracking leads to errors and incomplete data</p>
              </div>
            </div>

            {/* Problem 3: Identification Difficulties */}
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-3xl flex-shrink-0">❌</span>
              <div>
                <h3 className="text-xl font-bold text-deep-navy mb-2">Identification Difficulties</h3>
                <p className="text-secondary-text">Hard to track individual animals in large herds</p>
              </div>
            </div>

            {/* Problem 4: Time-Consuming */}
            <div className="flex gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <span className="text-3xl flex-shrink-0">❌</span>
              <div>
                <h3 className="text-xl font-bold text-deep-navy mb-2">Time-Consuming</h3>
                <p className="text-secondary-text">Manual processes waste valuable time and resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SOLUTION SECTION ==================== */}
      {/* Shows how Godhaar solves the problems */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-12">
            How Godhaar Solves This
          </h2>

          {/* Two-Column Layout: Image + Text */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Large Product Image */}
            <div className="w-full h-96 bg-gradient-brand rounded-2xl flex items-center justify-center text-9xl shadow-2xl transform hover:scale-105 transition-transform">
              🐄
            </div>

            {/* Right: Solution Explanation */}
            <div>
              {/* Main Explanation */}
              <p className="text-lg text-secondary-text mb-6 leading-relaxed">
                Godhaar uses advanced computer vision and deep learning to identify each animal by its unique muzzle pattern—like a fingerprint for cattle. This revolutionary approach eliminates the need for physical tags and provides instant, accurate identification.
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {/* Benefit 1 */}
                <div className="flex items-center gap-3">
                  <span className="text-brand-teal text-2xl font-bold">✅</span>
                  <span className="text-lg text-primary-text">No physical tags needed - completely non-invasive</span>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center gap-3">
                  <span className="text-brand-teal text-2xl font-bold">✅</span>
                  <span className="text-lg text-primary-text">Instant identification through simple photo capture</span>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-center gap-3">
                  <span className="text-brand-teal text-2xl font-bold">✅</span>
                  <span className="text-lg text-primary-text">Accurate digital records stored securely in the cloud</span>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-center gap-3">
                  <span className="text-brand-teal text-2xl font-bold">✅</span>
                  <span className="text-lg text-primary-text">Scalable for farms of any size - from 10 to 10,000 cattle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW IT WORKS SECTION ==================== */}
      {/* 3-step process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-12">
            How It Works
          </h2>

          {/* 3 Step Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1: Capture */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-4">Capture</h3>
              <p className="text-secondary-text">Take a photo of the cattle's muzzle using any smartphone or camera</p>
            </div>

            {/* Step 2: Analyze */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-4">Analyze</h3>
              <p className="text-secondary-text">Our AI processes the unique muzzle pattern using advanced computer vision</p>
            </div>

            {/* Step 3: Match */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-4">Match</h3>
              <p className="text-secondary-text">Instantly identify the animal and retrieve all associated records and data</p>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-center text-lg text-secondary-text mt-12">
            All data is securely stored in the cloud and accessible from anywhere, anytime.
          </p>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      {/* 6 key features */}
      <section id="features" className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-12">
            Key Features
          </h2>

          {/* Features Grid - 6 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Recognition */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">High Accuracy Recognition</h3>
              <p className="text-secondary-text leading-relaxed">95%+ accuracy in identifying cattle, even in challenging conditions and large herds</p>
            </div>

            {/* Feature 2: Analytics */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">Analytics & Insights</h3>
              <p className="text-secondary-text leading-relaxed">Track health metrics, breeding cycles, and generate actionable insights for better herd management</p>
            </div>

            {/* Feature 3: Cloud Storage */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">Cloud Storage</h3>
              <p className="text-secondary-text leading-relaxed">Secure, scalable cloud infrastructure ensures your data is always safe and accessible</p>
            </div>

            {/* Feature 4: Mobile App */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">Mobile App</h3>
              <p className="text-secondary-text leading-relaxed">Works seamlessly on smartphones with offline mode for areas with limited connectivity</p>
            </div>

            {/* Feature 5: Real-Time Tracking */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">Real-Time Tracking</h3>
              <p className="text-secondary-text leading-relaxed">Monitor your entire herd in real-time with instant updates and notifications</p>
            </div>

            {/* Feature 6: Security */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-deep-navy mb-3">Data Security</h3>
              <p className="text-secondary-text leading-relaxed">Enterprise-grade encryption and security protocols to protect sensitive farm data</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== USE CASES SECTION ==================== */}
      {/* 3 types of users */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-12">
            Who Uses Godhaar?
          </h2>

          {/* Use Cases - 3 Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Use Case 1: Individual Farmers */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-teal hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                <span className="text-3xl">🏡</span>
                Individual Farmers
              </h3>
              <p className="text-secondary-text leading-relaxed">
                Perfect for small to medium-sized farms looking to modernize their cattle management. Track your herd, maintain detailed health records, and improve productivity with data-driven decisions.
              </p>
            </div>

            {/* Use Case 2: Large Dairy Operations */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-teal hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                <span className="text-3xl">🏢</span>
                Large Dairy Operations
              </h3>
              <p className="text-secondary-text leading-relaxed">
                Streamline operations across thousands of cattle with automated identification and tracking. Reduce labor costs, minimize errors, and scale efficiently as your operation grows.
              </p>
            </div>

            {/* Use Case 3: Government & NGOs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-brand-teal hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-deep-navy mb-4 flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                Government & NGOs
              </h3>
              <p className="text-secondary-text leading-relaxed">
                Ideal for livestock census, disease tracking, breed management, and agricultural surveys. Enable data-driven policy decisions and efficient resource allocation at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DEMO SECTION ==================== */}
      {/* Video demo placeholder */}
      <section id="demo" className="py-20 bg-soft-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-12">
            See Godhaar in Action
          </h2>

          {/* Demo Video Placeholder */}
          <div className="w-full h-96 bg-gradient-brand rounded-2xl flex items-center justify-center text-6xl text-white shadow-2xl mb-8">
            🎥 Demo Video Placeholder
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@aviaraai.com"
              className="bg-brand-teal text-white px-8 py-4 rounded-lg font-semibold text-lg text-center hover:bg-teal-700 transform hover:-translate-y-1 hover:shadow-brand transition-all"
            >
              Request Demo
            </a>
            <a
              href="#"
              className="bg-transparent text-deep-navy border-2 border-deep-navy px-8 py-4 rounded-lg font-semibold text-lg text-center hover:bg-deep-navy hover:text-white transform hover:-translate-y-1 transition-all"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      {/* Final call-to-action */}
      <section className="py-20 bg-gradient-to-br from-deep-navy to-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CTA Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Cattle Management?
          </h2>

          {/* CTA Description */}
          <p className="text-xl text-light-slate mb-10">
            Join farmers and organizations already using Godhaar to manage their herds more efficiently and effectively.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@aviaraai.com"
              className="bg-brand-teal text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transform hover:-translate-y-1 hover:shadow-brand transition-all"
            >
              Get Started
            </a>
            <a
              href="mailto:contact@aviaraai.com"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-deep-navy transform hover:-translate-y-1 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

// SEO Metadata for this page
export const metadata = {
  title: 'Godhaar - AI-Powered Cattle Management | AviaraAI',
  description: 'Godhaar uses advanced computer vision and muzzle recognition to revolutionize cattle management and tracking.',
}
