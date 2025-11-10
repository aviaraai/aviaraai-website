'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-light-bg dark:bg-dark-bg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <section className="relative h-screen w-full overflow-hidden">
  {/* Video Background - Full Screen */}
  <div className="absolute inset-0 w-full h-full">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src="/main_hero.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  {/* Text Content */}
  <div className="relative z-10 h-full flex items-center justify-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
        AviaraAI <span className="text-gradient">Where Vision Meets Intelligence</span>
        <br />
      </h1>
    </div>
  </div>
</section>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-light-muted dark:border-dark-muted rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-light-muted dark:bg-dark-muted rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-light-surface dark:bg-dark-surface">
      Need to add something here !!
      </section>

      <section id="projects" className="py-20 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-sora text-light-primary dark:text-dark-primary text-center mb-4">
            Our Innovation Portfolio
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary text-center mb-12 max-w-3xl mx-auto">
            Building AI solutions that make a difference across industries
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/projects/godhaar" className="group">
              <div className="bg-light-surface dark:bg-dark-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-light-border dark:border-dark-border">
                <div className="h-48 bg-gradient-brand flex items-center justify-center text-8xl">
                  🐄
                </div>
                <div className="p-6">
                  <span className="inline-block px-4 py-1 bg-light-success/10 dark:bg-dark-success/10 text-light-success dark:text-dark-success rounded-full text-sm font-semibold mb-3">
                    Active
                  </span>
                  <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-3 group-hover:text-light-accent dark:group-hover:text-dark-accent">
                    Godhaar
                  </h3>
                  <p className="text-light-secondary dark:text-dark-secondary mb-4">
                    AI-powered cattle management system using muzzle recognition technology for identification and tracking
                  </p>
                  <span className="text-light-accent dark:text-dark-accent font-semibold inline-flex items-center gap-2">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>

            <div className="group cursor-pointer">
              <div className="bg-light-surface dark:bg-dark-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-light-border dark:border-dark-border">
                <div className="h-48 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-8xl">
                  📹
                </div>
                <div className="p-6">
                  <span className="inline-block px-4 py-1 bg-light-muted/10 dark:bg-dark-muted/10 text-light-muted dark:text-dark-muted rounded-full text-sm font-semibold mb-3">
                    Coming Soon
                  </span>
                  <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-3">
                    Smart Surveillance
                  </h3>
                  <p className="text-light-secondary dark:text-dark-secondary mb-4">
                    Next-generation CC camera system with intelligent monitoring and threat detection capabilities
                  </p>
                  <span className="text-light-muted dark:text-dark-muted font-semibold inline-flex items-center gap-2">
                    Stay Updated →
                  </span>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-light-surface dark:bg-dark-surface rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-light-border dark:border-dark-border">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-8xl">
                  🚀
                </div>
                <div className="p-6">
                  <span className="inline-block px-4 py-1 bg-light-muted/10 dark:bg-dark-muted/10 text-light-muted dark:text-dark-muted rounded-full text-sm font-semibold mb-3">
                    In Development
                  </span>
                  <h3 className="text-2xl font-bold text-light-primary dark:text-dark-primary mb-3">
                    Future Projects
                  </h3>
                  <p className="text-light-secondary dark:text-dark-secondary mb-4">
                    We are constantly innovating and exploring new applications of AI technology
                  </p>
                  <span className="text-light-accent dark:text-dark-accent font-semibold inline-flex items-center gap-2">
                    Get in Touch →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-surface dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-light-primary dark:text-dark-primary text-center mb-4">
            Our Approach to AI Innovation
          </h2>
          <p className="text-xl text-light-secondary dark:text-dark-secondary text-center mb-12 max-w-3xl mx-auto">
            A systematic process that turns ideas into impactful solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Identify</h4>
              <p className="text-light-secondary dark:text-dark-secondary">Discover real-world problems that need solving</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Research</h4>
              <p className="text-light-secondary dark:text-dark-secondary">Deep technical research and feasibility analysis</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Build</h4>
              <p className="text-light-secondary dark:text-dark-secondary">Develop scalable, reliable AI solutions</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
              <h4 className="text-xl font-bold text-light-primary dark:text-dark-primary mb-3">Deploy</h4>
              <p className="text-light-secondary dark:text-dark-secondary">Launch and create measurable impact</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-light-primary dark:text-dark-primary text-center mb-12">
            Making a Difference
          </h2>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-6xl font-bold text-gradient mb-3">1000+</h3>
              <p className="text-xl text-light-secondary dark:text-dark-secondary">Cattle Identified</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold text-gradient mb-3">95%</h3>
              <p className="text-xl text-light-secondary dark:text-dark-secondary">Recognition Accuracy</p>
            </div>
            <div>
              <h3 className="text-6xl font-bold text-gradient mb-3">3</h3>
              <p className="text-xl text-light-secondary dark:text-dark-secondary">Active Projects</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-light-accent to-blue-600 dark:from-dark-accent dark:to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Industry with AI?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let us discuss how our AI solutions can help solve your challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@aviaraai.com" className="bg-white text-light-accent dark:text-dark-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100">
              Get in Touch
            </a>
            <Link href="#projects" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10">
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}