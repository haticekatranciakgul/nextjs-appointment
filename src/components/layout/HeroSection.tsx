'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f5f2e8] via-[#f5f2e8] to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-10 w-32 h-32 bg-[#ede7d9] rounded-full opacity-30 blur-xl animate-pulse"></div>
        <div className="absolute top-48 right-20 w-48 h-48 bg-[#ede7d9] rounded-full opacity-30 blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#ede7d9] rounded-full opacity-30 blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Your Fashion and
                <br />
                <span className="text-[#374515]">Beauty Start Here</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                Welcome to Hatice Akgül Beauty - where elegance meets excellence. Experience professional nail care, stunning nail art, and premium beauty services that make you feel like royalty.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="/appointment"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#374515] to-[#2d3611] hover:from-[#f5f2e8]0 hover:to-[#2d3611] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Book Appointment
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative w-full h-[800px] lg:h-[800px]">
              <Image
                src="/hero.jpg"
                alt="Professional Nail Art Studio - Hatice Akgül Beauty"
                fill
                className="object-contain rounded-2xl shadow-2xl"
                priority
              />
              
              {/* Floating elements around the image */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-[#374515] rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-[#374515] rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-1/2 left-2 w-8 h-8 bg-[#374515] rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
}