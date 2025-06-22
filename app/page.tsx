import MainLayout from '@/components/MainLayout';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import ServiceSection from '@/components/ServiceSection';
import MidsloganSection from '@/components/MidsloganSection';
import WhatShapeUsSection from '@/components/WhatShapeUsSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero #home 或 # */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Service #service */}
      <div className="px-[24px] lg:px-[80px] scroll-mt-[88px]" id="service">
        <ServiceSection />
      </div>

      {/* slogan */}
      <div className="px-[24px] lg:px-[80px] scroll-mt-[88px]">
        <MidsloganSection />
      </div>
      
      {/* Gallery #gallery */}
      <div className="px-[24px] lg:px-[80px] scroll-mt-[88px]" id="gallery">
        <GallerySection />
      </div>

      {/* ShapesUs #shapeus */}
      <div className="px-[24px] lg:px-[80px] scroll-mt-[88px]" id="shapeus">
        <WhatShapeUsSection />
      </div>

      {/* Process #process */}
      <div className="px-[24px] lg:px-[80px] scroll-mt-[88px]" id="process">
        <ProcessSection />
      </div>

      {/* Contact Us #contact */}
      <div className="scroll-mt-[88px]" id="contact">
        <ContactSection />
      </div>


    </MainLayout>
  );
}
