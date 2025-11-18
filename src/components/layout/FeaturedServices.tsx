'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const featuredServices = [
  {
   

     id: 1,
    title: 'Lash Lifting',
    image: '/images/services/lash-lift.png',
    description: 'Natural lash lift and curl treatment'
  },
  {
   


    id: 2,
    title: 'Nail Art',
    image: '/images/services/nail-art.png',
    description: 'Creative and artistic nail designs'
  },
  {
    


     id: 3,
    title: 'Silk Eyelashes',
    image: '/images/services/silk-lashes.jpg',
    description: 'Silk eyelash extensions for natural look'
   
  },

 
  {
  

     id: 4,
    title: 'Mani-Pedi',
    image: '/images/services/mani-pedi.jpg',
    description: 'Complete hand and foot care'
  },
    {
  

     id: 5,
    title: 'Skin Care',
    image: '/images/services/skin-care.jpg',
    description: 'Coming soon'
  }
];

export default function FeaturedServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const servicesPerSlide = 3;
  const totalSlides = Math.ceil(featuredServices.length / servicesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };



  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            See Our Featured Services
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-[#374515] hover:bg-[#2d3611] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-[#374515] hover:bg-[#2d3611] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Services Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {featuredServices
                      .slice(slideIndex * servicesPerSlide, (slideIndex + 1) * servicesPerSlide)
                      .map((service) => (
                        <div key={service.id} className="group cursor-pointer">
                          {/* Service Image */}
                          <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-[4/5] relative">
                              {service.image ? (
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  className="object-cover"
                                  onError={() => {
                                    // Fallback to placeholder if image fails to load
                                  }}
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-[#f5f2e8] to-white flex items-center justify-center">
                                  <div className="text-center">
                                    <div className="w-20 h-20 mx-auto mb-4 bg-[#374515] rounded-full flex items-center justify-center">
                                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2L3 7v11a1 1 0 001 1h3v-7h6v7h3a1 1 0 001-1V7l-7-5z"/>
                                      </svg>
                                    </div>
                                    <p className="text-gray-600 text-sm">Service Image</p>
                                  </div>
                                </div>
                              )}
                              
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-[#374515] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </div>
                          </div>

                          {/* Service Info */}
                          <div className="mt-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-600">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* See All Services Button */}
        <div className="text-center">
          <Link 
            href="/services"
            className="inline-flex items-center px-8 py-3 bg-[#374515] hover:bg-[#2d3611] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            See All Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
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