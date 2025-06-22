type BuniItemProps = {
  letter: string;
  title: string;
  description: string;
  showDivider?: boolean;
};

export default function BuniItem({
  letter,
  title,
  description,
  showDivider = true,
}: BuniItemProps) {
  return (
    <div className="flex items-start gap-10 w-full">
      {/* 左側字母區塊（固定寬度 + 垂直置中） */}
      <div className="w-[90px] flex flex-col items-center">
        <div className="w-full text-center overflow-hidden">
          <span className="text-[72px] font-bold italic text-[#8B7AD3] leading-none block">
            {letter}
          </span>
        </div>
        {showDivider && <div className="w-px h-12 bg-gray-300 mt-2" />}
    </div>

      {/* 右側內容區塊 */}
    <div className="flex-1">
        <h4 className="text-[24px] md:text-[28px] font-semibold text-gray-900">{title}</h4>
        <p className="text-[16px] text-gray-700 mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
