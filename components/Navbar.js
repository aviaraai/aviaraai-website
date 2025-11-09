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
    { href: '/#about', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="text-2xl font-bold text-dark-primary">
              AviaraAI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-dark-secondary hover:text-dark-accent font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="/#projects"
              className="bg-dark-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-dark-accent-hover"
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-dark-primary text-2xl"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-4">
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
                href="/#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-dark-accent text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-dark-accent-hover"
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
