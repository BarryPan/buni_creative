import clsx from "clsx";
import galleryItems from "@/app/data/galleryItems.json";
import Image from 'next/image';

export default function GalleryPage() {
  return (
    <div className="pt-[64px] pb-[64px] md:pb-[80px]">
      {/* ✅ Section 標題區塊 */}
      <div className="pb-[64px] md:pb-[80px]">
        <h2 className="text-[32px] font-semibold text-gray-800 font-[Montserrat]">Featured Work</h2>
      </div>

      {/* ✅ Gallery 排版區塊 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
        {galleryItems.map((item, index) => {
      

          const colSpan = index % 3 === 0 ? 6 : 3;

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
                    "aspect-[152/100]": colSpan === 6,
                    "aspect-[72/100]": colSpan === 3,
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
                <p className="text-sm text-[#8B7AD3] pt-2 pb-[4px]">{item.category}</p>
                <p className="text-[22px] font-semibold">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
