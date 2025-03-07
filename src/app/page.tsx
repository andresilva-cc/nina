import { IntroSection } from '@/components/IntroSection';
import { GallerySection } from '@/components/GallerySection';

export default function Home() {
  return (
    <main className="flex flex-col gap-8 md:gap-12 lg:gap-16 text-center">
      <IntroSection />
      <GallerySection />
    </main>
  );
}
