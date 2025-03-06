import { IntroSection } from "@/components/IntroSection";
import { GallerySection } from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 md:gap-12 lg:gap-16 px-4 py-8 sm:p-8 md:p-12 lg:p-16 xl:px-24 text-center">
      <IntroSection />
      <GallerySection />
    </main>
  );
}
