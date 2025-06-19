type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="relative bg-[#8DC99F] px-6 pt-16 pb-10 text-gray-900">
      {/* 上方徽章容器，靠右 */}
      <div className="absolute -top-6 left-6">
        <div className="w-[85px] h-[85px] bg-[#8B7AD3] rounded-full flex items-center justify-center text-white text-[40px] font-semibold">
          {number}
        </div>
      </div>

      {/* 下方內容容器 */}
      <div className="text-left pt-[20px] pb-[50px] px-[20px]">
        <h4 className="text-[28px] font-semibold mb-3">{title}</h4>
        <p className="text-[16px] font-light leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
