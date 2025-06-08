import MainLayout from '@/components/MainLayout';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import GallerySection from '@/components/GallerySection';

export default function Home() {
  return (
    <MainLayout>
      {/* Hero 對應 #home 或 # */}
      <div class="border-b" id="home">
        <HeroSection />
      </div>

      {/* Service 對應 #service */}
      <div class="px-4 lg:px-16 border-b" id="service">
        <ServiceSection />
      </div>

      {/* Gallery 對應 #gallery */}
      <div class="px-4 lg:px-16" id="gallery">
        <GallerySection />
      </div>
    </MainLayout>
  );
}
