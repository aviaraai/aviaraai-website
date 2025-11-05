import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-light-surface dark:bg-dark-surface border-t border-light-border dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-light-primary dark:text-dark-primary">AviaraAI</h3>
            <p className="text-light-secondary dark:text-dark-secondary leading-relaxed">
              Building AI solutions that transform real-world challenges into opportunities for innovation and growth.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-light-primary dark:text-dark-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-light-primary dark:text-dark-primary">Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects/godhaar"
                  className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                >
                  Godhaar - Cattle Management
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                >
                  Smart Surveillance
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                >
                  Future Innovations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-light-primary dark:text-dark-primary">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-full flex items-center justify-center text-light-primary dark:text-dark-primary hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-all transform hover:-translate-y-1"
              >
                in
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-full flex items-center justify-center text-light-primary dark:text-dark-primary hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-all transform hover:-translate-y-1"
              >
                𝕏
              </a>
              <a
                href="mailto:contact@aviaraai.com"
                aria-label="Email"
                className="w-10 h-10 bg-light-bg dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-full flex items-center justify-center text-light-primary dark:text-dark-primary hover:bg-light-accent dark:hover:bg-dark-accent hover:text-white transition-all transform hover:-translate-y-1"
              >
                @
              </a>
            </div>
            <p className="text-light-secondary dark:text-dark-secondary">contact@aviaraai.com</p>
          </div>
        </div>

        <div className="border-t border-light-border dark:border-dark-border pt-8 text-center text-light-muted dark:text-dark-muted">
          <p>&copy; 2025 AviaraAI. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  )
}
