'use client'

import { useEffect, useState } from 'react';
import { clsx } from 'clsx'
import { useSwipeable } from 'react-swipeable';
import { CaretLeft, CaretRight, X } from '@phosphor-icons/react'
import useScrollBlock from '@/hooks/useScrollBlock';
import { Text } from './Text'

export interface ImageViewerProps {
  currentIndex: number;
  images: {
    thumbnail: string;
    full: string;
  }[];
  onRequestPrevious: () => void;
  onRequestNext: () => void;
  onRequestClose: () => void;
}

export function ImageViewer({currentIndex, images, onRequestPrevious, onRequestNext, onRequestClose}: ImageViewerProps) {
  const [blockScroll, allowScroll] = useScrollBlock()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (currentIndex !== -1) {
      setIsOpen(true);
      return
    }
    
    setIsOpen(false);
  }, [currentIndex]);
  
  useEffect(() => {
    if (!isOpen) return;
  
    blockScroll();
  
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") onRequestPrevious();
      if (event.key === "ArrowRight") onRequestNext();
      if (event.key === "Escape") onRequestClose();
    };
  
    document.addEventListener("keyup", handleKeyPress);
  
    return () => {
      allowScroll();
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [isOpen, onRequestPrevious, onRequestNext, onRequestClose, allowScroll, blockScroll])
  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onRequestNext(),
    onSwipedRight: () => onRequestPrevious(),
    onSwipedDown: () => onRequestClose(),
  })

  return (
    <div
      className={clsx(
        { hidden: currentIndex === -1 },
        'fixed top-0 left-0 w-screen h-screen sm:p-4 md:p-8 lg:p-16'
      )}
    >
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-gray-950/50 backdrop-blur-sm"
        onClick={onRequestClose}
      />
      
      <div
        className="relative flex flex-col gap-4 w-full h-full pt-4 md:px-4 rounded-2xl bg-gray-950 border border-gray-800"
        {...swipeHandlers}
      >
        <Text>{currentIndex + 1}/{images.length}</Text>

        <button
          className="absolute top-0 right-0 m-3 rounded-full p-1 hover:bg-gray-900 active:bg-gray-800 transition-colors cursor-pointer"
          onClick={onRequestClose}
        >
          <X size={24} weight="bold" />
        </button>

        <div className="w-full h-full flex items-center gap-4 overflow-hidden">
          <button
            className="hidden sm:block rounded-full p-1 hover:bg-gray-900 active:bg-gray-800 transition-colors cursor-pointer"
            onClick={onRequestPrevious}
          >
            <CaretLeft size={32} weight="bold" />
          </button>

          <div className="w-full h-full flex justify-center">
            <img
              src={images[currentIndex]?.full ?? null}
              alt="Foto da Nina"
              className="object-contain"
            />
          </div>

          <button
            className="hidden sm:block rounded-full p-1 hover:bg-gray-900 active:bg-gray-800 transition-colors cursor-pointer"
            onClick={onRequestNext}
          >
            <CaretRight size={32} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
  
}