'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from '../../../../components/ThemeToggle'

export default function GodhaarNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/projects/godhaar#about', label: 'About' },
    { href: '/projects/godhaar#features', label: 'Features' },
    { href: '/projects/godhaar#how-it-works', label: 'How It Works' },
    { href: '/projects/godhaar#benefits', label: 'Benefits' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 ${scrolled ? 'bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md shadow-lg' : 'bg-light-surface/90 dark:bg-dark-surface/90 backdrop-blur-sm shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Links back to Homepage */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <span className="text-2xl font-bold text-light-primary dark:text-dark-primary">
              AviaraAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Godhaar Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-light-accent/10 dark:bg-dark-accent/10 rounded-lg">
              <span className="text-2xl">🐄</span>
              <span className="font-bold text-light-accent dark:text-dark-accent">Godhaar</span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            <ThemeToggle />
            
            <Link
              href="/"
              className="bg-light-accent dark:bg-dark-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover"
            >
              Back to Home
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-light-primary dark:text-dark-primary text-2xl"
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
              <div className="flex items-center gap-2 px-4 py-2 bg-light-accent/10 dark:bg-dark-accent/10 rounded-lg">
                <span className="text-2xl">🐄</span>
                <span className="font-bold text-light-accent dark:text-dark-accent">Godhaar</span>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-light-accent dark:bg-dark-accent text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover"
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