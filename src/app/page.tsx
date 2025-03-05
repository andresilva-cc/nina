import { IntroSection } from "@/components/IntroSection";
import { GallerySection } from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="p-8 flex flex-col gap-16 text-center">
      <IntroSection />
      <GallerySection />
    </main>
  );
}
