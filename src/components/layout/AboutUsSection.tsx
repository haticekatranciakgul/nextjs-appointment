'use client';
import Image from 'next/image';

export default function AboutUsSection() {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-[#f5f2e8] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        About <span className="text-[#374515]">Hatice Akgül Beauty</span>
                    </h2>
                    <div className="w-24 h-1 bg-[#374515] mx-auto mb-8"></div>
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
                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-[#374515] rounded-full opacity-20"></div>
                        <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-[#ede7d9] rounded-full opacity-30"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-8">
                        <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
                            <p>
                                Hatice Akgül Beauty is a boutique beauty studio that transforms elegance into art.
                                Located in Antalya, we offer personalized gel nails, acrylic/prosthetic nails, nail art, manicure–pedicure, eyelash extensions, and lash lifting services — all crafted with precision and care.
                            </p>

                            <p>
                                Every nail design is a carefully created masterpiece,
                                and every eyelash application enhances your natural beauty with a refined, captivating touch.

                                Using modern techniques, strict hygiene standards, and premium-quality products, we deliver results that are both natural-looking and long-lasting.
                            </p>

                            <p>
                                At Hatice Akgül Beauty, our goal is not only to create an aesthetic look,
                                but to design beauty experiences that elevate your confidence and make you feel truly empowered.
 </p>
                            <p>
                                Because we believe every woman is a queen…
                                And queens reveal their elegance through their hands and their gaze. 👑
                            </p>


                        
                        </div>

                        {/* Decorative Elements */}
                        <div className="flex items-center space-x-4 pt-8">
                            <div className="w-16 h-0.5 bg-[#ede7d9]"></div>
                            <div className="text-[#374515] text-2xl">💎</div>
                            <div className="w-16 h-0.5 bg-[#ede7d9]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}