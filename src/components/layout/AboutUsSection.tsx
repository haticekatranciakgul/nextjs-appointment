'use client';
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Hatice Akgül Beauty
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/nail-file-image.jpg"
                alt="Professional nail care process at Hatice Akgül Beauty"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-pink-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-pink-300 rounded-full opacity-30"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
              <p>
               Hatice Akgül Beauty is a nail studio that transforms beauty into art.
              </p>
              
              <p>
                Every nail is a carefully crafted masterpiece; every detail is a graceful reflection of your unique style.
              </p>
              
              <p>
                With modern techniques, hygienic applications, and premium-quality products, we offer a personalized beauty experience.
              </p>
              
              <p>
                Our goal is not just to create an aesthetic look — but to design touches that express your confidence and make you feel empowered.
              </p>

              <p>Because we believe every woman is a queen, 
                and queens… are recognized by their hands. 👑
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="flex items-center space-x-4 pt-8">
              <div className="w-16 h-0.5 bg-pink-300"></div>
              <div className="text-pink-400 text-2xl">💎</div>
              <div className="w-16 h-0.5 bg-pink-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}