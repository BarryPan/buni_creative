// components/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-8">
      {/* 背景光暈 */}
      <div className="absolute top-[-5%] right-[-20%] w-[300px] lg:w-[800px] h-[300px] lg:h-[500px] bg-[#8B7AD3] blur-[150px] rounded-[200px] z-0"></div>
      <div className="absolute bottom-[-100px] left-[-20%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#8DC99F] blur-[120px] rounded-full z-0"></div>

      {/* 內容區塊 */}
      <div className="relative z-10 px-16 max-w-screen-xl mx-auto">
        <h1 className="text-[2em] md:text-[3.5em] lg:text-[4.5em] font-semibold text-gray-900 font-[Montserrat] max-w-[768pxpx]">
          Drive Business Growth <br />
          through <span className="text-[#8B7AD3]">Design</span> and <span className="text-[#8B7AD3]">Tech</span>
        </h1>

        <p className="text-[16px] md:text-[20px] text-gray-600 mt-6 max-w-[768pxpx] mx-auto leading-relaxed">
          We translate business needs into effective digital solutions — from branding to websites and marketing — blending strategy, design, and technology to drive growth.
        </p>

        <Link href="#contact">
          <button className="w-[130px] md:w-[195px] h-[37px] md:h-[56px] mt-10 px-6 py-2 text-base font-medium font-[Nunito_Sans] text-[12px] md:text-[18px] text-white bg-[#8B7AD3] hover:bg-white hover:text-black transition">
            Start a Project
          </button>
        </Link>
      </div>
    </section>
  );
}
