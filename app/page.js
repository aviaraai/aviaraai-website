"use client";

import Link from "next/link";
import Image from "next/image";
import HeroRotator from "@/components/HeroRotator";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-light-bg dark:bg-dark-bg">
        <div className="absolute top-0 right-0 w-96 h-96 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <>
          <HeroRotator />
        </>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-light-muted dark:border-dark-muted rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-light-muted dark:bg-dark-muted rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-10 pb-4 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-sora font-bold mb-2 tracking-tight">
            About <span className="text-indigo-600">AviaraAI</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-0">
            Aviara AI was founded on a simple belief: the future of safety and
            intelligence will be built through computer vision and AI. With
            rapid advances in AI, we build adaptable AI systems that understand
            the world, learn from data and take real-time action powering
            smarter, safer, and more efficient solutions across industries.
          </p>
        </div>
      </section>

      <section id="whatweoffer">
        <WhatWeOffer />
      </section>

      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-sora text-gray-900 text-center mb-4">
            Our Innovation Portfolio
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Building AI solutions that make a difference across industries
          </p>

          {/* Grid: items-stretch makes all cells equal height */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* Godhaar Project */}
            <Link href="/projects/godhaar" legacyBehavior>
              <a
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 transform-gpu transition-all duration-300 ease-out
                      hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.015]"
              >
                {/* Image / Visual - fallback bg if missing */}
                <div className="relative h-40 md:h-48 w-full bg-gray-50">
                  <Image
                    src="/cow_cover.webp"
                    alt="Godhaar muzzle recognition"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain object-center bg-white"
                    loading="lazy"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gD//2Q=="
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                      Active
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Godhaar
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      AI-powered cattle management system using muzzle
                      recognition technology for identification and tracking.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-black font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:text-blue-600 hover:translate-x-1">
                      Learn More →
                    </span>
                    <span className="text-sm text-gray-400">
                      Case Study · 2025
                    </span>
                  </div>
                </div>
              </a>
            </Link>

            {/* Smart Surveillance */}
            <div className="group flex">
              <div
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 transform-gpu transition-all duration-300 ease-out w-full
                        hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.015] flex flex-col"
              >
                <div className="relative h-40 md:h-48 w-full bg-gray-50">
                  <Image
                    src="/cc_camera.webp"
                    alt="Smart Surveillance"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  />
                </div>

                <div className="p-6 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <span className="inline-block px-4 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-semibold mb-3">
                      Coming Soon
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Smart Surveillance
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Next-generation camera system with intelligent monitoring
                      and threat detection capabilities.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* <span className="text-gray-500 font-semibold inline-flex items-center gap-2">
                Stay Updated →
              </span> */}
                    <span className="text-sm text-gray-400">R&D · 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Projects */}
            <Link href="/products" className="group flex">
              <div
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 transform-gpu transition-all duration-300 ease-out w-full
            hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.015] flex flex-col cursor-pointer"
              >
                <div className="relative h-40 md:h-48 w-full bg-gray-50">
                  <Image
                    src="/future_projects.webp"
                    alt="Future Projects"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  />
                </div>

                <div className="p-6 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <span className="inline-block px-4 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-semibold mb-3">
                      In Development
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Other Projects
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      We are constantly innovating and exploring new
                      applications of AI technology.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* <span className="text-blue-600 font-semibold inline-flex items-center gap-2">
          Get in Touch →
        </span> */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-black font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:text-blue-600 hover:translate-x-1">
                        Learn More →
                      </span>
                    </div>
                    <span className="text-sm text-gray-400">
                      Case Study · 2025
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-sora text-gray-900 text-center mb-4">
            Our Approach to AI Innovation
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            A systematic process that turns ideas into impactful solutions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Identify</h4>
              <p className="text-gray-600">
                Discover real-world problems that need solving
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Research</h4>
              <p className="text-gray-600">
                Deep technical research and feasibility analysis
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Build</h4>
              <p className="text-gray-600">
                Develop scalable, reliable AI solutions
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Deploy</h4>
              <p className="text-gray-600">
                Launch and create measurable impact
              </p>
            </div>
          </div>
        </div>
      </section>

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
              href="products"
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
