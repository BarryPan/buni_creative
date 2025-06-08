export default function ServiceSection() {
  const services = [
    {
      category: 'BUSINESS',
      title: 'Design with business impact in mind.',
      description:
        'Translate your vision into practical design strategies that support growth. From brand-aligned websites and digital mockups to on-demand marketing assets, each deliverable is crafted to communicate your value clearly, inspire trust, and drive business momentum.',
      bg: 'bg-[#FEF7EB]',
    },
    {
      category: 'USER EXPERIENCE',
      title: 'Craft human-centered digital products.',
      description:
        'Design intuitive, scalable UX solutions for websites and products. Translate real user needs into responsive interfaces that work across platforms—ready for development or direct implementation through modern tools.',
      bg: 'bg-[#EEC0DE]',
    },
    {
      category: 'NARRATIVE',
      title: 'Shape the voice behind the visuals.',
      description:
        'Clarify your brand’s purpose, voice, and point of view. Establish cohesive messaging and visual direction across platforms to ensure consistency across marketing, product, and communication touch points.',
      bg: 'bg-[#8DC99F]',
    },
    {
      category: 'IDENTITY',
      title: 'Create a brand that works everywhere.',
      description:
        'Develop a flexible identity system—logo, color palette, typography, and layouts—designed to scale across digital and physical applications. From packaging to pitch decks, ensure everything your audience sees is aligned, expressive, and unmistakably yours.',
      bg: 'bg-[#D9D3F7]',
    },
  ];

  return (
    <div className="pt-[64px] pb-16">
      <h2 className="text-3xl font-semibold text-gray-800 mb-12 font-[Montserrat]">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className={`${service.bg}`}>
            <p className="px-8 pt-16 mb-8 text-[14px] font-semibold text-[#8B7AD3] tracking-wide font-[Montserrat]">
              {service.category}
            </p>
            <h3 className=" px-8 text-[32px] font-semibold text-gray-900 mb-4 font-[Nunito_Sans]">
              {service.title}
            </h3>
            <p className="px-8 pb-18 text-[16px] text-gray-700 font-[Nunito_Sans]">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
