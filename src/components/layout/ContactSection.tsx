'use client';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Get in touch and find out
                <br />
                <span className="text-[#374515]">how we can help</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Ready to transform your nails? Contact us today to schedule your appointment 
                and experience our professional nail care services.
              </p>
            </div>

            <div className="pt-4">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#374515] to-[#2d3611] hover:from-[#2d3611] hover:to-[#2d3611] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-[#f5f2e8] to-white flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-[#374515] rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Contact Image</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#374515] rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#374515] rounded-full opacity-60"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-[#374515] rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}