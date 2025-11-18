'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ava Evans',
    role: 'Client',
    content: 'I have finally found a place that truly cares about perfection. My gel nails have never looked this clean and flawless.',
    avatar: '/images/avatar1.jpg'
  },
  {
    id: 2,
    name: 'AMELIA Isabella',
    role: 'Client',
    content: 'Quick, precise, and relaxing service. Highly recommend for anyone who wants perfect nails and lashes.',
    avatar: '/images/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Sofia Martinez',
    role: 'Client',
    content: 'The nail art designs are absolutely stunning! The attention to detail and creativity exceeded my expectations.',
    avatar: '/images/avatar3.jpg'
  },
  {
    id: 4,
    name: 'Emma Johnson',
    role: 'Client',
    content: 'Professional lash lifting service that gave me the perfect natural curl. I love how my lashes look now!',
    avatar: '/images/avatar4.jpg'
  },
  {
    id: 5,
    name: 'Olivia Brown',
    role: 'Client',
    content: 'The silk eyelash extensions look so natural and beautiful. Amazing work and very comfortable experience.',
    avatar: '/images/avatar5.jpg'
  },
  {
    id: 6,
    name: 'Isabella Davis',
    role: 'Client',
    content: 'Best mani-pedi experience ever! The salon is clean, the staff is friendly, and the results are perfect.',
    avatar: '/images/avatar6.jpg'
  }
];

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerSlide = 2;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#f5f2e8] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Client Say
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    {testimonials
                      .slice(slideIndex * testimonialsPerSlide, (slideIndex + 1) * testimonialsPerSlide)
                      .map((testimonial) => (
                        <div 
                          key={testimonial.id} 
                          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                          {/* Quote Content */}
                          <div className="mb-6">
                            <div className="flex mb-4">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i} 
                                  className="w-5 h-5 text-yellow-400 fill-current" 
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                                </svg>
                              ))}
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              &ldquo;{testimonial.content}&rdquo;
                            </p>
                          </div>

                          {/* Client Info */}
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#374515] to-[#2d3611] rounded-full flex items-center justify-center mr-4">
                              <span className="text-white font-semibold text-lg">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-500 text-sm">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4 mt-12">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:bg-[#f5f2e8] transition-all duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:bg-[#f5f2e8] transition-all duration-200"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-[#374515]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}