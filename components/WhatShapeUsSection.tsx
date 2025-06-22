import BuniItem from "./BuniItem";

export default function WhatShapesUsSection() {
  return (
    <section className="pt-[64px] md:pt-[80px]">
      <h2 className="text-[32px] font-semibold text-gray-800 font-[Montserrat] pb-6">What Shapes Us</h2>

      <div className="flex flex-col md:flex-row gap-[200px]">
        {/* 左側綠色方塊 */}
        <div className="hidden md:flex flex-grow items-end justify-center">
          <div className="aspect-[420/501] w-full max-w-[420px]">
            <img
              src='/Shape Us.png'
              alt='What Shape Us'
              className="object-contain flex flex-col justify-end justify-between"
            />
          </div>
        </div>  

        {/* 右側 BUNI 區塊 */}
        <div className="w-full md:w-[60%] flex flex-col gap-[64px] md:gap-[114px]">
          <BuniItem
            letter="B"
            title="Business"
            description="We ask what you're trying to solve, why it matters, and what success looks like — before we jump in. Every project starts with clarity, so the creative work actually moves your business forward."
          />
          <BuniItem
            letter="U"
            title="User experience"
            description="Whether it's a website, a product, or a process, we design around real needs. Our role is to make things work better — for your users and for your team."
          />
          <BuniItem
            letter="N"
            title="Narrative"
            description="Design is how you tell your story when you're not in the room. We help shape that voice, so your brand speaks clearly and consistently — across platforms, and over time."
          />
          <BuniItem
            letter="I"
            title="Infrastructure"
            description="Solution should be maintainable, measurable, and ready to grow. We build digital foundations that stay solid — with systems and tools that adapt as your business evolves."
            showDivider={false}
          />
        </div>

      </div>
    </section>
  );
}
