'use client'

import { useState } from 'react'
import { ImageViewer } from './ImageViewer'
import { Text } from './Text'

export function GallerySection() {
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
    <section>
      <Text variant="h2" className="mb-4 text-amber-500">Gallery</Text>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-4">
        { images.map((image, index) => (
          <li
            key={index}
            className="aspect-square bg-center bg-no-repeat bg-cover hover:opacity-80 active:opacity-60 transition-opacity cursor-pointer"
            style={{ backgroundImage: `url('${image.thumbnail}')` }}
            onClick={() => setCurrentIndex(index)} />
        ))}
      </ul>
  
      <ImageViewer
        currentIndex={currentIndex}
        images={images}
        onRequestPrevious={previousImage}
        onRequestNext={nextImage}
        onRequestClose={() => setCurrentIndex(-1)}
      />
    </section>
  )
}