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
                className="text-pink-400 hover:text-pink-500 transition-colors"
              >
                <a 
                href="https://www.instagram.com/alanya_antalya_nail_art" 
                className="text-pink-400 hover:text-pink-500 transition-colors"
              >
                https://www.instagram.com/alanya_antalya_nail_art
              </a>
              </a>
              <p className="pt-2">Appointments:</p>
              <a 
                href="mailto:appointments@salon.com" 
                className="text-pink-400 hover:text-pink-500 transition-colors"
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
                  src="/crown-icon.png"
                  alt="Crown"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-pink-400 font-script text-3xl">Queen Beauty</span>
              </Link>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-400 hover:bg-pink-500 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-400 hover:bg-pink-500 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.187-.237-.291-.535-.291-.852 0-.829.676-1.5 1.511-1.5.389 0 .744.148 1.01.39.266-.242.621-.39 1.01-.39.835 0 1.511.671 1.511 1.5 0 .317-.104.615-.291.852-.749.948-1.9 1.559-3.197 1.559h-.066zm7.098 0c-1.297 0-2.448-.611-3.197-1.559-.187-.237-.291-.535-.291-.852 0-.829.676-1.5 1.511-1.5.389 0 .744.148 1.01.39.266-.242.621-.39 1.01-.39.835 0 1.511.671 1.511 1.5 0 .317-.104.615-.291.852-.749.948-1.9 1.559-3.197 1.559h-.066z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-400 hover:bg-pink-500 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.952 2.998l2.311-2.998h-15.263v24h7.5v-10.5h3l.5-3.5h-3.5v-1.918c0-.615.423-.582 1-.582h2.5v-3.5c0 0-1.553-.097-2.198-.097-2.455 0-3.302 1.474-3.302 3.097v1.5h-3v3.5h3v10.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>&copy; 2024 All Rights Reserved by Queen Beauty.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-pink-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-pink-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}