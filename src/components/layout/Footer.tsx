'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Location
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>Alanya</p>
              <p>Antalya</p>
              <p>Turkey</p>
            </div>
          </div>

          {/* Enquiries */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>General Information:</p>
              <a 
                href="mailto:info@salon.com" 
                className="text-[#374515] hover:text-[#2d3611] transition-colors"
              >
               </a>  
                <a 
                href="https://www.instagram.com/alanya_antalya_nail_art" 
                className="text-[#374515] hover:text-[#2d3611] transition-colors"
              >
                https://www.instagram.com/alanya_antalya_nail_art
              </a>
             
              <p className="pt-2">Appointments:</p>
              <a 
                href="mailto:katrancihatice@icloud.com" 
                className="text-[#374515] hover:text-[#2d3611] transition-colors"
              >
                katrancihatice@icloud.com
              </a>
            </div>
          </div>

          {/* Logo and Social */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/icon6.png"
                  alt="Crown"
                  width={150}
                  height={150}
                 
                />
              </Link>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/alanya_antalya_nail_art/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#374515] hover:bg-[#2d3611] text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@hatice.akgl.beaut?is_from_webapp=1&sender_device=pc" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#374515] hover:bg-[#2d3611] text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* Email */}
              <a 
                href="mailto:katrancihatice@icloud.com" 
                className="w-10 h-10 bg-[#374515] hover:bg-[#2d3611] text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>&copy; 2025 All Rights Reserved by Hatice Akgül Beauty.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="mailto:katrancihatice@icloud.com"  className="hover:text-[#374515] transition-colors">
                Bu sayfanın geliştirilmesi ile ilgili düşüncelerinizi iletin.
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}