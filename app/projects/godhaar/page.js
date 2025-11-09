'use client'

import Link from 'next/link'

export default function GodhaarPage() {
  return (
    <div>
     {/* HERO SECTION */}
<section className="min-h-screen flex items-center relative overflow-hidden pt-20">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/cow_background.jpeg" 
      alt="Cattle Farm Background" 
      className="w-full h-full object-cover"
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
        Revolutionizing Livestock Management with AI-Powered Biometric muzzle print recognition technology.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#about" 
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-sora text-lg hover:bg-blue-700 transition-all inline-block text-center"
        >
          Learn More
        </a>
        <a 
          href="mailto:contact@aviaraai.com" 
          className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-sora text-lg hover:bg-white/10 transition-all inline-block text-center"
        >
          Request Demo
        </a>
      </div>
    </div>
  </div>
</section>

     {/* ABOUT SECTION - TEXT LEFT, IMAGE RIGHT */}
<section id="about" className="py-20 bg-light-surface dark:bg-dark-surface">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* TEXT - LEFT */}
      <div className="order-2 md:order-1">
        <h2 className="text-4xl md:text-5xl font-bold text-light-primary dark:text-dark-primary mb-6">
          What is Godhaar?
        </h2>
        <p className="text-lg text-light-secondary dark:text-dark-secondary mb-6 leading-relaxed">
          Godhaar is an advanced AI-powered cattle management system that uses cutting-edge muzzle recognition technology to identify and track individual cattle.
        </p>
        <p className="text-lg text-light-secondary dark:text-dark-secondary mb-6 leading-relaxed">
          Just like human fingerprints, each cow has a unique muzzle pattern that our system can recognize with 95% accuracy in just 2 seconds.
        </p>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">95%</div>
            <p className="text-sm text-light-muted dark:text-dark-muted">Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">2s</div>
            <p className="text-sm text-light-muted dark:text-dark-muted">ID Time</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
            <p className="text-sm text-light-muted dark:text-dark-muted">Cattle</p>
          </div>
        </div>
      </div>

      {/* IMAGE - RIGHT (WHITE CONTAINER) */}
      <div className="order-1 md:order-2 flex justify-center">
        <div className="bg-white dark:bg-white rounded-3xl p-8 shadow-xl w-full max-w-md aspect-square flex items-center justify-center overflow-hidden border border-light-border dark:border-dark-border">
          <img 
            src="/Godhaar_logo_small.png" 
            alt="Godhaar Cattle Recognition" 
            className="w-full h-full object-cover rounded-2xl  bg-white/100"
          />
        </div>
      </div>
    </div>
  </div>
</section>

      {/* PROBLEM SECTION - IMAGE LEFT, TEXT RIGHT */}
<section className="py-20 bg-light-bg dark:bg-dark-bg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* IMAGE - LEFT (SMALLER SIZE) */}
     <div className="flex justify-center">
  <div 
    className="rounded-3xl overflow-hidden border border-light-border dark:border-dark-border shadow-xl"
    style={{ width: "450px", height: "450px" }} // ⬅ Change values as needed
  >
    <img 
      src="/problems.png" 
      alt="Traditional Methods" 
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>


      {/* TEXT - RIGHT */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-light-primary dark:text-dark-primary mb-6">
          The Problems with Traditional Methods
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2">Time-Consuming</h4>
              <p className="text-light-secondary dark:text-dark-secondary">
                Manual identification takes minutes per animal, wasting valuable farm time
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2">Lost Records</h4>
              <p className="text-light-secondary dark:text-dark-secondary">
                Paper-based tracking leads to incomplete and lost data over time. No health traceability as well.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2">Human Error</h4>
              <p className="text-light-secondary dark:text-dark-secondary">
                Misidentification leads to wrong treatments and breeding mistakes
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2">Costly Mistakes</h4>
              <p className="text-light-secondary dark:text-dark-secondary">
                Identification errors result in expensive veterinary emergencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* SOLUTION SECTION - TEXT LEFT, IMAGE RIGHT */}
<section id="features" className="py-20 bg-light-surface dark:bg-dark-surface">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* TEXT - LEFT */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-light-primary dark:text-dark-primary mb-6">
          Our AI-Powered Solution
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2">Biometric Accuracy</h4>
              <p className="text-light-secondary dark:text-dark-secondary">
                AI identifies cattle in 2 seconds with 95% accuracy using unique muzzle patterns
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2">No More Tags</h4>
              <p className="text-light-secondary dark:text-dark-secondary">
                Contactless, humane, tamper-proof identification without physical tags or collars
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2">Offline Ready</h4>
              <p className="text-light-secondary dark:text-dark-secondary">
                Works in remote areas without internet
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="text-3xl flex-shrink-0"></div>
            <div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2">Farmer Friendly</h4>
              <p className="text-light-secondary dark:text-dark-secondary">
                Simple. Secure. Local language support for easy adoption
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE - RIGHT (SMALLER SIZE) */}
       <div className="flex justify-center">
  <div 
    className="rounded-3xl overflow-hidden border border-light-border dark:border-dark-border shadow-xl"
    style={{ width: "450px", height: "450px" }} // ⬅ Change values as needed
  >
    <img 
      src="/our_ai_solution.png" 
      alt="Solution" 
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>
    </div>
  </div>
</section>

      {/* HOW IT WORKS - IMAGE LEFT, TEXT RIGHT */}
      <section id="how-it-works" className="py-20 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-light-primary dark:text-dark-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-light-secondary dark:text-dark-secondary max-w-3xl mx-auto">
              From capture to certification in seconds. Experience the seamless journey of our Godhaar Process in 5 easy steps
            </p>
          </div>

          <div className="space-y-24">
            {/* STEP 1 - IMAGE LEFT, TEXT RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-brand rounded-3xl p-12 flex items-center justify-center aspect-square">
                  <div className="text-9xl">📸</div>
                </div>
              </div>
              <div>
                <div className="inline-block px-6 py-2 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full mb-4">
                  <span className="text-light-accent dark:text-dark-accent font-bold">STEP 1</span>
                </div>
                <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-4">
                  Capture Muzzle Image
                </h3>
                <p className="text-lg text-light-secondary dark:text-dark-secondary leading-relaxed">
                  Simply take a photo of the cattle's muzzle using your smartphone camera. Our app guides you to capture the perfect angle for best results.
                </p>
              </div>
            </div>

            {/* STEP 2 - TEXT LEFT, IMAGE RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-6 py-2 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full mb-4">
                  <span className="text-light-accent dark:text-dark-accent font-bold">STEP 2</span>
                </div>
                <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-4">
                  AI Processing
                </h3>
                <p className="text-lg text-light-secondary dark:text-dark-secondary leading-relaxed">
                  Our advanced AI analyzes the unique muzzle pattern in milliseconds. The deep learning model processes thousands of data points to create a unique signature.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl p-12 flex items-center justify-center aspect-square">
                  <div className="text-9xl">🧠</div>
                </div>
              </div>
            </div>

            {/* STEP 3 - IMAGE LEFT, TEXT RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl p-12 flex items-center justify-center aspect-square">
                  <div className="text-9xl">🎯</div>
                </div>
              </div>
              <div>
                <div className="inline-block px-6 py-2 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full mb-4">
                  <span className="text-light-accent dark:text-dark-accent font-bold">STEP 3</span>
                </div>
                <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-4">
                  Pattern Matching
                </h3>
                <p className="text-lg text-light-secondary dark:text-dark-secondary leading-relaxed">
                  The system compares the pattern against our database and identifies the cattle within 2 seconds with 95% accuracy. If it's a new animal, you can register it instantly.
                </p>
              </div>
            </div>

            {/* STEP 4 - TEXT LEFT, IMAGE RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-6 py-2 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full mb-4">
                  <span className="text-light-accent dark:text-dark-accent font-bold">STEP 4</span>
                </div>
                <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-4">
                  Access Full Profile
                </h3>
                <p className="text-lg text-light-secondary dark:text-dark-secondary leading-relaxed">
                  View complete health records, breeding history, milk production data, and vaccination schedules. Update any information with just a few taps.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-12 flex items-center justify-center aspect-square">
                  <div className="text-9xl">📊</div>
                </div>
              </div>
            </div>

            {/* STEP 5 - IMAGE LEFT, TEXT RIGHT */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl p-12 flex items-center justify-center aspect-square">
                  <div className="text-9xl">🎯</div>
                </div>
              </div>
              <div>
                <div className="inline-block px-6 py-2 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full mb-4">
                  <span className="text-light-accent dark:text-dark-accent font-bold">STEP 5</span>
                </div>
                <h3 className="text-3xl font-bold text-light-primary dark:text-dark-primary mb-4">
                  Digital Certification
                </h3>
                <p className="text-lg text-light-secondary dark:text-dark-secondary leading-relaxed">
                  Now you can download digital certificates for your cattle.Each certificate includes animal details, owner info, and a unique QR code for quick verification.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-light-primary dark:text-dark-primary text-center mb-4">
            Why Choose Godhaar?
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary text-center mb-12 max-w-3xl mx-auto">
            Everything you need to manage your herd efficiently
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-2xl border border-light-border dark:border-dark-border">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Mobile-First Design</h3>
              <p className="text-light-secondary dark:text-dark-secondary">
                Easy-to-use mobile app for iOS and Android devices
              </p>
            </div>

            <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-2xl border border-light-border dark:border-dark-border">
              <div className="text-5xl mb-4">💉</div>
              <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Health Records</h3>
              <p className="text-light-secondary dark:text-dark-secondary">
                Track vaccinations, treatments, and medical history
              </p>
            </div>

            <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-2xl border border-light-border dark:border-dark-border">
              <div className="text-5xl mb-4">🔔</div>
              <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Smart Alerts</h3>
              <p className="text-light-secondary dark:text-dark-secondary">
                Reminders for vaccinations and breeding schedules
              </p>
            </div>

            <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-2xl border border-light-border dark:border-dark-border">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Analytics</h3>
              <p className="text-light-secondary dark:text-dark-secondary">
                Insights and reports to optimize herd management
              </p>
            </div>

            <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-2xl border border-light-border dark:border-dark-border">
              <div className="text-5xl mb-4">🥛</div>
              <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Milk Production</h3>
              <p className="text-light-secondary dark:text-dark-secondary">
                Track daily milk yield for each animal
              </p>
            </div>

            <div className="bg-light-bg dark:bg-dark-bg p-8 rounded-2xl border border-light-border dark:border-dark-border">
              <div className="text-5xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Breeding History</h3>
              <p className="text-light-secondary dark:text-dark-secondary">
                Complete breeding records and offspring tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS - IMAGE LEFT, TEXT RIGHT */}
      <section id="benefits" className="py-20 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* IMAGE - LEFT */}
            <div>
              <div className="bg-gradient-to-br from-light-accent to-blue-600 dark:from-dark-accent dark:to-blue-700 rounded-3xl p-12 flex items-center justify-center aspect-square">
                <div className="text-center text-white">
                  <div className="text-7xl mb-4">📈</div>
                  <div className="text-5xl font-bold mb-2">50%</div>
                  <p className="text-xl">Time Saved</p>
                </div>
              </div>
            </div>

            {/* TEXT - RIGHT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-light-primary dark:text-dark-primary mb-6">
                Transform Your Farm Operations
              </h2>
              <div className="space-y-6">
                <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-xl border border-light-border dark:border-dark-border">
                  <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2"> Save 50% Time</h4>
                  <p className="text-light-secondary dark:text-dark-secondary">
                    Reduce cattle identification from minutes to seconds
                  </p>
                </div>
                <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-xl border border-light-border dark:border-dark-border">
                  <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2"> Lower Costs</h4>
                  <p className="text-light-secondary dark:text-dark-secondary">
                    Eliminate costly identification errors and vet emergencies
                  </p>
                </div>
                <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-xl border border-light-border dark:border-dark-border">
                  <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2"> Better Decisions</h4>
                  <p className="text-light-secondary dark:text-dark-secondary">
                    Data-driven insights for breeding, feeding, and healthcare
                  </p>
                </div>
                <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-xl border border-light-border dark:border-dark-border">
                  <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-2"> Full Traceability</h4>
                  <p className="text-light-secondary dark:text-dark-secondary">
                    Complete digital records for compliance and quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-light-accent to-blue-600 dark:from-dark-accent dark:to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Cattle Management?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Join 50+ farms already using Godhaar for smarter herd management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@aviaraai.com" className="bg-white text-light-accent dark:text-dark-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100">
              Request Demo
            </a>
            <Link href="/" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}