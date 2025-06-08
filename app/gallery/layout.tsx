// app/gallery/layout.tsx
export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-white-100 min-h-screen px-16">
      {/* 64px paddle from the top */}
      <div className="pt-[64px] pb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gallery</h1>
      </div>

      {/* grid for 3 columns */}
      <div>{children}</div>
    </section>
  );
}