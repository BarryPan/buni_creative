import ServiceCard from "./ServiceCard";
import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="pt-[64px] pb-[64px] md:pb-[120px]">
      <div className="pb-[32px]">
        <h2 className="text-[28px] md:text-[32px] font-semibold text-gray-800 font-[Montserrat]">What We Help With</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <ServiceCard
          icon={<Image src="/icon/Puzzle.svg" alt="" width={96} height={96} />}
          title="Clarify Your Brand"
          description="When your brand feels scattered or no longer reflects who you are, we help you reposition it."
          detail="Through strategy, design, and storytelling, we shape identities that resonate across every touchpoint, digital and beyond."
          items={["Branding strategy", "Visual Creation"]}
          bgColor="bg-[#FEF7EB]"
          iconColor="#D9D3F7"
          />
        <ServiceCard
          icon={<Image src="/icon/Picture.svg" alt="" width={96} height={96} />}
          title="Craft Digital Solutions"
          description="Outdated systems and disconnected tools can create barriers between you and your audience."
          detail="We help identify the problem, design the right solution — whether it's a website, a platform, an internal tool - built to move your business forward."
          items={["UX/UI design", "Website & Product design", "Technical implementation"]}
          bgColor="bg-[#D9D3F7]"
          iconColor="#8DC99F"

        />
        <ServiceCard
          icon={<Image src="/icon/Gears.svg" alt="" width={96} height={96} />}
          title="Maintain and Evolve"
          description="Your digital presence doesn’t end at launch. We help you maintain, adapt, and extend what you’ve built."
          detail="From performance and analytics to branded content and digital campaigns that keep your presence consistent and evolving."
          items={["Technical maintenance", "Analytics & performance tuning", "Digital marketing"]}
          bgColor="bg-[#EEC0DE]"
          iconColor="#FEF7EB"


        />
      </div>
    </section>
  );
}
