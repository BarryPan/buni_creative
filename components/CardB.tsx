type CardBProps = {
  icon: React.ReactNode;
  text: string;
  bgColor?: string; // tailwind 類別，預設紫色
};

export default function CardB({ icon, text, bgColor = "bg-[#8B7AD3]" }: CardBProps) {
  return (
    <div className={`w-full ${bgColor} text-white flex items-center gap-3 md:gap-12 px-[10px] md:px-[120px] py-[30px] md:py-[75px]`}>
      <div className="w-[44px] md:w-[67px] h-[66] md:h-[99px] flex items-center justify-center">{icon}</div>
      <p className="text-[10px] md:text-[24px] leading-relaxed max-w-xl font-light">{text}</p>
    </div>
  );
}