'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
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
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-md shadow-lg' 
        : 'bg-light-surface/90 dark:bg-dark-surface/90 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center text-white font-bold text-xl transform group-hover:scale-110 transition-transform">
              A
            </div>
            <span className="text-2xl font-bold text-light-primary dark:text-dark-primary">
              AviaraAI
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-light-accent dark:bg-dark-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            <ThemeToggle />
            
            <Link
              href="/#projects"
              className="bg-light-accent dark:bg-dark-accent text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover transform hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </Link>
          </div>

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

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
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
                href="/#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-light-accent dark:bg-dark-accent text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover"
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