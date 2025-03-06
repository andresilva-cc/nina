import { IntroSection } from "@/components/IntroSection";
import { GallerySection } from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 px-4 py-8 sm:p-8 md:p-12 lg:p-16 xl:p-24 text-center">
      <IntroSection />
      <GallerySection />
    </main>
  );
}
