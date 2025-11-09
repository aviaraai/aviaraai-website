'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function GodhaarNavbar() {
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
        // Scrolling DOWN & past 100px -> Hide navbar
        setVisible(false)
      } else {
        // Scrolling UP -> Show navbar
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navLinks = [
    { href: '/projects/godhaar#about', label: 'About' },
    { href: '/projects/godhaar#features', label: 'Features' },
    { href: '/projects/godhaar#how-it-works', label: 'Process' },
    { href: '/projects/godhaar#benefits', label: 'Benefits' },
  ]

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-dark-surface/95 backdrop-blur-md shadow-lg' 
          : 'bg-dark-surface/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Links back to Homepage */}
         <Link href="/" className="flex items-center gap-3 group">
  {/* Icon Image */}
  <img 
    src="/Godhaar_logo.jpeg" 
    alt="AviaraAI Icon" 
    className="h-10 w-10 rounded-lg hover:scale-110 transition-transform"
  />
  
  {/* Text/Wordmark - Bold Text */}
<span className="text-2xl font-bold text-dark-primary">
  GODHAAR
</span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-secondary hover:text-dark-accent font-sora"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-dark-primary text-2xl"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
              {/* Godhaar Badge Mobile */}
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-accent/10 rounded-lg">
                <span className="text-2xl">🐄</span>
                <span className="font-bold text-dark-accent">Godhaar</span>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-dark-secondary hover:text-dark-accent font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-dark-accent text-white px-6 py-3 rounded-lg font-sora text-center hover:bg-dark-accent-hover"
              >
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}