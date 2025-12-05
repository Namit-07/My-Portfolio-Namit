'use client'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1e2330] py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/" className="text-white/60 hover:text-[#d2e823] transition-colors text-sm font-medium">
            Home
          </Link>
          <Link href="/projects" className="text-white/60 hover:text-[#d2e823] transition-colors text-sm font-medium">
            Projects
          </Link>
          <Link href="/blog" className="text-white/60 hover:text-[#d2e823] transition-colors text-sm font-medium">
            Blog
          </Link>
          <Link href="/experience" className="text-white/60 hover:text-[#d2e823] transition-colors text-sm font-medium">
            Experience
          </Link>
          <Link href="/contact" className="text-white/60 hover:text-[#d2e823] transition-colors text-sm font-medium">
            Contact
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/40 text-sm text-center md:text-left">
            © {currentYear} Namit Tickoo. All rights reserved.
          </p>

          {/* Built with badge */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Built with</span>
            <span className="text-white/60 font-semibold flex items-center gap-1">
              <svg className="w-4 h-4" viewBox="0 0 128 128" fill="currentColor">
                <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
              </svg>
              Next.js
            </span>
            <span>&</span>
            <span className="text-[#d2e823] font-semibold">💚</span>
          </div>

          {/* Made with love */}
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <span className="text-red-500 animate-pulse">❤️</span> in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
