import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-sora mb-4 text-gray-900">AviaraAI</h3>
            <p className="text-gray-600 leading-relaxed">
              Building AI solutions that transform real-world challenges into
              opportunities for innovation and growth.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-sora mb-4 text-gray-900">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/story"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Story
                </Link>
              </li>
              <li>
                <Link
                  href="/#blog"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-sora mb-4 text-gray-900">PRODUCT</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/projects/godhaar"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Godhaar - Cattle Management
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Smart Surveillance
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Future Innovations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-sora mb-4 text-gray-900">FOLLOW US</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/shaik-asif-umeed/"
                target="_blank"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
              >
                in
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-asif-umeed/"
                target="_blank"
                aria-label="X (Twitter)"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
              >
                𝕏
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@aviaraai.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
              >
                @
              </a>
            </div>
            <p className="text-gray-600">info@aviaraai.com</p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>
            &copy; 2025 AviaraAI. All rights reserved. | Privacy Policy | Terms
            of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
