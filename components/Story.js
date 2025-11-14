import Link from "next/link";

export default function Story() {
  return (
    <main className="font-sora text-[#0F4C75] bg-white">

<section className="w-full h-screen flex flex-col md:flex-row bg-gray-100">

  {/* LEFT SIDE — MISSION TEXT */}
  <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16">
    <div className="max-w-md">
      <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
        Our Mission
      </h2>

      <p className="text-lg text-gray-700 leading-relaxed">
        Our mission is to build practical, reliable AI systems that help
        organizations solve real-world problems using technology that is
        accurate, scalable, and simple to deploy in real environments.
      </p>
    </div>
  </div>

  {/* RIGHT SIDE — GIF */}
  <div
    className="w-full md:w-1/2 h-[300px] md:h-full"
    style={{
      backgroundImage: "url('/about_us.gif')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  ></div>

</section>

      {/* Divider */}
      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* ---------- OUR VISION ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-20 fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
          Our Vision
        </h2>

        <p className="lead mb-6">
          At Aviara AI, we believe AI should be accessible, practical, and impactful.
          Many of the technologies we are building might exist in theory — but are
          not adapted or deployed in the real world.
        </p>

        <p className="text-lg text-black/80 leading-relaxed mb-4">
          As early adopters of cutting-edge AI, we take the responsibility to bring
          these innovations to clients, tailor them to real environments, and make
          them usable at scale.
        </p>

        <p className="text-lg text-black/80 leading-relaxed mb-4">
          We are building products that can save lives, protect assets, and transform
          industries — all with the infrastructure organizations already have.
        </p>

        <p className="text-lg text-black/80 leading-relaxed font-semibold">
          Aviara AI is not just a company. It is a vision for a safer, smarter future.
        </p>
      </section>

      {/* Divider */}
      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* ---------- OUR STORY ---------- */}
      <section className="max-w-5xl mx-auto px-6 py-20 fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">
          Our Story
        </h2>

        <div className="prose max-w-none lg:columns-2 lg:gap-12 text-black/80 prose-lg">
          <p>
            Aviara AI was born from a realization: Most disasters — accidents,
            thefts, health emergencies, and safety failures — are only recognized
            after the damage is done.
          </p>

          <p>
            By the time someone notices a problem, it is already too late.
            Lives are affected, finances are lost, and response time becomes the enemy.
          </p>

          <blockquote className="border-l-4 border-[#0F4C75] pl-6 italic my-4">
            “What if we could identify danger at the moment it starts — or even before?”
          </blockquote>

          <p>
            That question led to the foundation of Aviara AI.
          </p>

          <p>
            Leveraging the latest advancements in computer vision, machine learning, and edge AI,
            we began designing a suite of Predictive Alert Systems — specialized AI models that
            can work on existing camera infrastructure and send real-time alerts to authorities.
          </p>

          <p>
            Today, Aviara AI is shaping the next phase of safety technology with smart,
            adaptable, and proactive AI solutions for industries, cities, public spaces,
            and enterprises. We are committed to building systems that not only observe
            but also understand and respond.
          </p>

          <p className="font-semibold mt-2">
            Because safety shouldn’t wait for something to go wrong.
          </p>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-gray-200 max-w-5xl mx-auto" />

      {/* add the roadmap here */}


    </main>
  );
}
