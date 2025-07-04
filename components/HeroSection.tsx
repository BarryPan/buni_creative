// components/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[64px] md:pt-32 pb-8">
      {/* 背景光暈 */}
      <div className="absolute top-[-10%] md:top-[-15%] right-[-50%] md:right-[-15%] w-[300px] lg:w-[500px] h-[200px] lg:h-[300px] bg-[#8B7AD3] blur-[150px] rounded-[200px] z-0"></div>
      <div className="absolute bottom-[-100px] left-[-30%] w-[300px] lg:w-[600px] h-[300px] lg:h-[300px] bg-[#8DC99F] blur-[120px] rounded-full z-0"></div>

      {/* 內容區塊 */}
      <div className="relative z-10 pb-[64px] md:pb-[128px] px-[24px] md:px-[80px] max-w-screen-xl">
        <h1 className="text-[48px] md:text-[64px] text-[#312F37] font-semibold font-[Montserrat] max-w-[768pxpx]">
          Drive Business Growth <br />
          through <span className="text-[#8B7AD3]">Design</span> and <span className="text-[#8B7AD3]">Tech</span>
        </h1>

        <p className="text-[16px] md:text-[20px] mt-6 text-[#312F37] mx-auto leading-relaxed">
          We translate business needs into effective digital solutions — from branding to websites and marketing — blending strategy, design, and technology to drive growth.
        </p>

        <Link href="#contact">
          <button className="w-[195px] h-[56px] mt-10 px-6 py-2 text-base font-medium font-[Nunito_Sans] text-[18px] text-white bg-[#8B7AD3] hover:bg-white hover:text-black transition">
            Start a Project
          </button>
        </Link>
      </div>
    </section>
  );
}
