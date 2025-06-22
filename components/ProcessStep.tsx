type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative bg-[#8DC99F] px-[24px] md:px-[48px] pt-16 pb-10 text-gray-900">
      {/* 上方徽章容器，靠右 */}
      <div className="absolute -top-[42.5px] left-6">
        <div className="w-[85px] h-[85px] bg-[#8B7AD3] rounded-full flex items-center justify-center text-white text-[40px] font-semibold">
          {number}
        </div>
      </div>

      {/* 下方內容容器 */}
      <div className="text-left pt-[40px] pb-[50px]">
        <h4 className="text-[24px] md:text-[28px] font-semibold mb-3">{title}</h4>
        <p className="text-[16px] font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
