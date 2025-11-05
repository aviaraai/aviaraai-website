'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      {/* This is the first thing visitors see */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Gradient Circles - Decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-muted-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-deep-navy mb-6 leading-tight">
            AI Solutions That <span className="text-gradient">Transform</span>
            <br />
            Real-World Challenges
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-secondary-text mb-10 max-w-3xl mx-auto">
            From cattle management to smart surveillance, we build AI that solves practical problems and creates lasting impact
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary Button */}
            <Link
              href="#projects"
              className="bg-brand-teal text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transform hover:-translate-y-1 hover:shadow-brand transition-all"
            >
              View Our Projects
            </Link>

            {/* Secondary Button */}
            <Link
              href="#about"
              className="bg-transparent text-deep-navy border-2 border-deep-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-deep-navy hover:text-white transform hover:-translate-y-1 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - Animated Arrow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-slate-gray rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-slate-gray rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      {/* Tells visitors who you are */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-4">
            Who We Are
          </h2>

          {/* Section Subtitle */}
          <p className="text-xl text-secondary-text text-center mb-12 max-w-3xl mx-auto">
            Innovating at the intersection of artificial intelligence and real-world impact
          </p>

          {/* About Description */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg text-secondary-text leading-relaxed">
              AviaraAI is an AI innovation startup focused on creating practical, scalable solutions across multiple industries. We combine cutting-edge computer vision, machine learning, and deep learning to solve real-world problems that matter.
            </p>
          </div>

          {/* Value Propositions - 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: Clear Purpose */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-2xl flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-3">Clear Purpose</h3>
              <p className="text-secondary-text">
                We identify genuine problems and build solutions that create measurable impact
              </p>
            </div>

            {/* Card 2: Cutting-Edge Tech */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-2xl flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-3">Cutting-Edge Tech</h3>
              <p className="text-secondary-text">
                Leveraging the latest in AI, computer vision, and machine learning technologies
              </p>
            </div>

            {/* Card 3: Real Results */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-2xl flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform">
                📈
              </div>
              <h3 className="text-2xl font-bold text-deep-navy mb-3">Real Results</h3>
              <p className="text-secondary-text">
                Delivering solutions that scale and generate tangible value for our users
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      {/* Showcases your projects */}
      <section id="projects" className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-4">
            Our Innovation Portfolio
          </h2>

          {/* Section Subtitle */}
          <p className="text-xl text-secondary-text text-center mb-12 max-w-3xl mx-auto">
            Building AI solutions that make a difference across industries
          </p>

          {/* Projects Grid - 3 Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* PROJECT 1: GODHAAR (Active) */}
            <Link href="/projects/godhaar" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-brand flex items-center justify-center text-8xl">
                  🐄
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Status Badge */}
                  <span className="inline-block px-4 py-1 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-semibold mb-3">
                    Active
                  </span>

                  {/* Project Name */}
                  <h3 className="text-2xl font-bold text-deep-navy mb-3 group-hover:text-brand-teal transition-colors">
                    Godhaar
                  </h3>

                  {/* Project Description */}
                  <p className="text-secondary-text mb-4">
                    AI-powered cattle management system using muzzle recognition technology for identification and tracking
                  </p>

                  {/* Learn More Link */}
                  <span className="text-brand-teal font-semibold inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More →
                  </span>
                </div>
              </div>
            </Link>

            {/* PROJECT 2: CC CAMERA SYSTEM (Coming Soon) */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-slate-gray to-charcoal flex items-center justify-center text-8xl">
                  📹
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Status Badge */}
                  <span className="inline-block px-4 py-1 bg-light-gray text-slate-gray rounded-full text-sm font-semibold mb-3">
                    Coming Soon
                  </span>

                  {/* Project Name */}
                  <h3 className="text-2xl font-bold text-deep-navy mb-3">
                    Smart Surveillance
                  </h3>

                  {/* Project Description */}
                  <p className="text-secondary-text mb-4">
                    Next-generation CC camera system with intelligent monitoring and threat detection capabilities
                  </p>

                  {/* Learn More Link */}
                  <span className="text-slate-gray font-semibold inline-flex items-center gap-2">
                    Stay Updated →
                  </span>
                </div>
              </div>
            </div>

            {/* PROJECT 3: FUTURE PROJECTS (In Development) */}
            <div className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-muted-blue to-brand-teal flex items-center justify-center text-8xl">
                  🚀
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Status Badge */}
                  <span className="inline-block px-4 py-1 bg-light-gray text-slate-gray rounded-full text-sm font-semibold mb-3">
                    In Development
                  </span>

                  {/* Project Name */}
                  <h3 className="text-2xl font-bold text-deep-navy mb-3">
                    Future Projects
                  </h3>

                  {/* Project Description */}
                  <p className="text-secondary-text mb-4">
                    We're constantly innovating and exploring new applications of AI technology
                  </p>

                  {/* Learn More Link */}
                  <span className="text-brand-teal font-semibold inline-flex items-center gap-2">
                    Get in Touch →
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== PROCESS SECTION ==================== */}
      {/* Shows how you work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-4">
            Our Approach to AI Innovation
          </h2>

          {/* Section Subtitle */}
          <p className="text-xl text-secondary-text text-center mb-12 max-w-3xl mx-auto">
            A systematic process that turns ideas into impactful solutions
          </p>

          {/* Process Steps - 4 Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Identify */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold transform group-hover:scale-110 transition-transform">
                1
              </div>
              <h4 className="text-xl font-bold text-deep-navy mb-3">Identify</h4>
              <p className="text-secondary-text">Discover real-world problems that need solving</p>
            </div>

            {/* Step 2: Research */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold transform group-hover:scale-110 transition-transform">
                2
              </div>
              <h4 className="text-xl font-bold text-deep-navy mb-3">Research</h4>
              <p className="text-secondary-text">Deep technical research and feasibility analysis</p>
            </div>

            {/* Step 3: Build */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold transform group-hover:scale-110 transition-transform">
                3
              </div>
              <h4 className="text-xl font-bold text-deep-navy mb-3">Build</h4>
              <p className="text-secondary-text">Develop scalable, reliable AI solutions</p>
            </div>

            {/* Step 4: Deploy */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-brand rounded-full flex items-center justify-center text-white text-2xl font-bold transform group-hover:scale-110 transition-transform">
                4
              </div>
              <h4 className="text-xl font-bold text-deep-navy mb-3">Deploy</h4>
              <p className="text-secondary-text">Launch and create measurable impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      {/* Shows your achievements */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy text-center mb-12">
            Making a Difference
          </h2>

          {/* Stats Grid - 3 Statistics */}
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* Stat 1: Cattle Identified */}
            <div>
              <h3 className="text-6xl font-bold text-gradient mb-3">1000+</h3>
              <p className="text-xl text-secondary-text">Cattle Identified</p>
            </div>

            {/* Stat 2: Accuracy */}
            <div>
              <h3 className="text-6xl font-bold text-gradient mb-3">95%</h3>
              <p className="text-xl text-secondary-text">Recognition Accuracy</p>
            </div>

            {/* Stat 3: Projects */}
            <div>
              <h3 className="text-6xl font-bold text-gradient mb-3">3</h3>
              <p className="text-xl text-secondary-text">Active Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      {/* Final call-to-action */}
      <section id="contact" className="py-20 bg-gradient-to-br from-deep-navy to-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* CTA Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Industry with AI?
          </h2>

          {/* CTA Description */}
          <p className="text-xl text-light-slate mb-10">
            Let's discuss how our AI solutions can help solve your challenges
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Email Button */}
            <a
              href="mailto:contact@aviaraai.com"
              className="bg-brand-teal text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transform hover:-translate-y-1 hover:shadow-brand transition-all"
            >
              Get in Touch
            </a>

            {/* Projects Button */}
            <Link
              href="#projects"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-deep-navy transform hover:-translate-y-1 transition-all"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}