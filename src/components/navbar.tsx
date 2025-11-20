'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import siteLogo from '@/assets/images/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
          <Image src={siteLogo} alt="Smartnex Logo" className="inline h-8 w-8 mr-2" />
            Smartnex
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition">
              Home
            </Link>
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition">
                Services
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
                <Link href="/services/healthcare" className="block px-4 py-3 text-foreground hover:text-primary transition border-b border-border">
                  Healthcare Solutions
                </Link>
                <Link href="/services/software" className="block px-4 py-3 text-foreground hover:text-primary transition border-b border-border">
                  Software Solutions
                </Link>
                <Link href="/services/attendance" className="block px-4 py-3 text-foreground hover:text-primary transition">
                  Attendance Management
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-foreground hover:text-primary transition py-2">
              Home
            </Link>
            <Link href="/services/healthcare" className="block text-foreground hover:text-primary transition py-2">
              Healthcare Solutions
            </Link>
            <Link href="/services/software" className="block text-foreground hover:text-primary transition py-2">
              Software Solutions
            </Link>
            <Link href="/services/attendance" className="block text-foreground hover:text-primary transition py-2">
              Attendance Management
            </Link>
            <Link href="/about" className="block text-foreground hover:text-primary transition py-2">
              About
            </Link>
            <Link href="/contact" className="block text-foreground hover:text-primary transition py-2">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
