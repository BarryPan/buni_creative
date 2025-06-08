// components/HeroSection.tsx
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* 背景光暈 */}
      <div className="absolute top-[-5%] right-[-20%] w-[800px] h-[500px] bg-[#8B7AD3] blur-[150px] rounded-[200px] z-0"></div>
      <div className="absolute bottom-[-100px] left-[-20%] w-[600px] h-[600px] bg-[#8DC99F] blur-[120px] rounded-full z-0"></div>

      {/* 內容區塊 */}
      <div className="relative z-10 px-16 max-w-screen-xl mx-auto">
        <h1 className="text-[72px] font-semibold text-gray-900 font-[Montserrat]">
          Design that moves <br />
          your business forward
        </h1>

        <p className="text-[20px] text-gray-600 mt-6 max-w-xl leading-relaxed font-[Nunito_Sans]">
          From brand identity to digital experience, turn your ideas into meaningful, market-ready visuals.
        </p>

        <Link href="#contact">
          <button className="mt-10 border border-black px-6 py-2 text-base font-medium font-[Nunito_Sans] hover:bg-black hover:text-white transition">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
}
