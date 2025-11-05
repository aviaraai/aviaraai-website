import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">AviaraAI</h3>
            <p className="text-light-slate leading-relaxed">
              Building AI solutions that transform real-world challenges into opportunities for innovation and growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-light-slate hover:text-brand-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-light-slate hover:text-brand-teal transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-light-slate hover:text-brand-teal transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-light-slate hover:text-brand-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects/godhaar" className="text-light-slate hover:text-brand-teal transition-colors">
                  Godhaar - Cattle Management
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-light-slate hover:text-brand-teal transition-colors">
                  Smart Surveillance
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-light-slate hover:text-brand-teal transition-colors">
                  Future Innovations
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-teal transition-all transform hover:-translate-y-1"
              >
                in
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-teal transition-all transform hover:-translate-y-1"
              >
                𝕏
              </a>
              <a
                href="mailto:contact@aviaraai.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-teal transition-all transform hover:-translate-y-1"
              >
                @
              </a>
            </div>
            <p className="text-light-slate">contact@aviaraai.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-light-slate">
          <p>&copy; 2025 AviaraAI. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}