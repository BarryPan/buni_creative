import ProcessStep from "./ProcessStep";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover What Matters",
      description:
        "We start by learning the problem behind the request. Through conversations, research, or quick audits, we help uncover the real problem and define what success should look like.",
    },
    {
      number: "02",
      title: "Design with Intention",
      description:
        "We turn strategy into design. Whether it’s a new brand identity, a UX flow, or a prototype. You see ideas early, give feedback often, and help shape the solution.",
    },
    {
      number: "03",
      title: "Build What Works",
      description:
        "Once the design is clear, we bring it to life. Whether it's a website, an app, or a content system, we build for flexibility and clarity — so it works now, and later.",
    },
    {
      number: "04",
      title: "Iterate and Improve",
      description:
        "After launch, we stay involved to refine, adapt, and grow what we’ve created. We track what’s working, respond to new needs, and keep your digital presence evolving.",
    },
  ];

  return (
    <section className="pt-[64px] pb-6 py-20">
      <h2 className="text-[32px] font-semibold text-gray-800 font-[Montserrat] pb-6">
        Working Together
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 pt-[50px] pb-20">
        {steps.map((step) => (
          <ProcessStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
