'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/crown-icon.png"
                alt="Crown"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-pink-400 font-script text-3xl">Queen Beauty</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className="text-gray-800 hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-gray-600 hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-600 hover:text-pink-400 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-pink-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-pink-100">
            <Link href="/" className="text-gray-800 block px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-pink-400 block px-3 py-2 text-base font-medium">
              About Us
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-pink-400 block px-3 py-2 text-base font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-pink-400 block px-3 py-2 text-base font-medium">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-pink-400 block px-3 py-2 text-base font-medium">
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}