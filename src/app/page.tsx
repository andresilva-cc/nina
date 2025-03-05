'use client'

// import Image from "next/image";
import { ImageViewer } from '@/components/ImageViewer'
import { useState } from 'react'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const images = []

  for (let i = 1; i <= 60; i++) {
    images.push({
      thumbnail: `/images/thumbnail/${i}.jpeg`,
      full: `/images/full/${i}.jpeg`,
    })
  }

  function previousImage() {
    if (currentIndex === 0) {
      return;
    }
    
    setCurrentIndex(currentIndex - 1);
  }
  
  function nextImage() {
    if (currentIndex === images.length - 1) {
      return;
    }

    setCurrentIndex(currentIndex + 1);
  }

  return (
    <main className="m-8 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4">
        { images.map((image, index) => (
          <button
            key={index}
            className="aspect-square bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url('${image.thumbnail}')` }}
            onClick={() => setCurrentIndex(index)} />
        ))}
      </div>

      <ImageViewer
        currentIndex={currentIndex}
        images={images}
        onRequestPrevious={previousImage}
        onRequestNext={nextImage}
        onClose={() => setCurrentIndex(-1)}
      />
    </main>
  );
}
