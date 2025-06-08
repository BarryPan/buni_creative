import clsx from "clsx";
import galleryItems from "../data/galleryItems.json";
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
      {galleryItems.map((item, index) => {
        const rowIndex = Math.floor(index / 3);
        const positionInRow = index % 3;

        // 對於 md+ 做交錯排版
        let colSpan = 4;
        if (rowIndex % 2 === 0) {
          colSpan = positionInRow === 0 ? 6 : 3;
        } else {
          colSpan = positionInRow === 2 ? 6 : 3;
        }

        return (
          <div
            key={index}
            className={clsx(
              "bg-white overflow-hidden",
              "col-span-1", // 手機：單欄
              {
                "md:col-span-6": colSpan === 6,
                "md:col-span-3": colSpan === 3,
              }
            )}
          >
            {/* 圖片區塊，手機固定 aspect，平板以上依 colSpan 切換 */}
            <div
              className={clsx(
                "aspect-[72/100]", // 手機固定比例
                {
                  "md:aspect-[152/100]": colSpan === 6,
                  "md:aspect-[72/100]": colSpan === 3,
                },
                "w-full overflow-hidden bg-gray-200"
              )}
            >
              <img
                src={item.img_link}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 文字區 */}
            <div >
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-[22px] font-semibold">{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
