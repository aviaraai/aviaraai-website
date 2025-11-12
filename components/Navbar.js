'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Set scrolled state for background
      setScrolled(currentScrollY > 50)

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: '/#blog', label: 'Blog' },
    { href: '/#projects', label: 'Products' },
    { href: '/#careers', label: 'Careers' },
    { href: '/#story', label: 'Story' },
    { href: '/#contact', label: 'Contact' }
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-sora text-xl">
              A
            </div>
            <span className="text-2xl font-sora text-gray-900">
              AviaraAI
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-900 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 text-2xl"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-900 hover:text-blue-700 font-medium py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-sora text-center hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
