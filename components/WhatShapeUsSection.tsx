import BuniItem from "./BuniItem";

export default function WhatShapesUsSection() {
  return (
    <section className="pt-[64px] pb-6 py-20">
      <h2 className="text-[32px] font-semibold text-gray-800 font-[Montserrat] pb-6">What Shapes Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* 左側綠色方塊 */}
        <div className="bg-white w-full aspect-[3/4]" />

        {/* 右側 BUNI 區塊 */}
        <div className="flex flex-col gap-10">
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
