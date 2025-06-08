import clsx from "clsx";
import galleryItems from "@/app/data/galleryItems.json";
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <div>
      {/* ✅ Section 標題區塊 */}
      <div className="pt-[64px] pb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gallery</h1>
      </div>

      {/* ✅ Gallery 排版區塊 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
        {galleryItems.map((item, index) => {
          const rowIndex = Math.floor(index / 3);
          const positionInRow = index % 3;

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
                "col-span-1",
                {
                  "md:col-span-6": colSpan === 6,
                  "md:col-span-3": colSpan === 3,
                }
              )}
            >
              <div
                className={clsx(
                  "aspect-[72/100]",
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

              <div>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-[22px] text-purple-600 font-semibold">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
