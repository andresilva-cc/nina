'use client'

import { useEffect, useState } from 'react';
import { clsx } from 'clsx'
import { useSwipeable } from 'react-swipeable';
import { CaretLeft, CaretRight, X } from '@phosphor-icons/react'
import useScrollBlock from '@/hooks/useScrollBlock';

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

export function ImageViewer(props: ImageViewerProps) {
  const [blockScroll, allowScroll] = useScrollBlock()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (props.currentIndex !== -1) {
      setIsOpen(true);
      return
    }
    
    setIsOpen(false);
  }, [props.currentIndex]);
  
  useEffect(() => {
    if (!isOpen) return;
  
    blockScroll();
  
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") props.onRequestPrevious();
      if (event.key === "ArrowRight") props.onRequestNext();
      if (event.key === "Escape") props.onRequestClose();
    };
  
    document.addEventListener("keyup", handleKeyPress);
  
    return () => {
      allowScroll();
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [isOpen, props.onRequestPrevious, props.onRequestNext, props.onRequestClose])
  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => props.onRequestNext(),
    onSwipedRight: () => props.onRequestPrevious(),
  })

  return (
    <div
      className={clsx(
        { hidden: props.currentIndex === -1 },
        'fixed z-10 top-0 left-0 w-screen h-screen sm:p-4 md:p-8 lg:p-16'
      )}
    >
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-gray-950/50 backdrop-blur-sm"
        onClick={props.onRequestClose}
      />
      
      <div
        className="flex flex-col items-center justify-start gap-2 w-full h-full z-20 bg-gray-950 border border-gray-900 py-4 md:px-4 relative rounded-2xl"
        {...swipeHandlers}
      >
        <p>{props.currentIndex + 1}/{props.images.length}</p>

        <button
          className="absolute top-0 right-0 m-4 rounded-full p-1 hover:bg-gray-900 active:bg-gray-800 transition-colors cursor-pointer"
          onClick={props.onRequestClose}
        >
          <X size={24} weight="bold" />
        </button>

        <div className="w-full h-full flex-1 flex items-center justify-center gap-4 overflow-hidden">
          <button
            className="hidden sm:block rounded-full p-1 hover:bg-gray-900 active:bg-gray-800 transition-colors cursor-pointer"
            onClick={props.onRequestPrevious}
          >
            <CaretLeft size={32} weight="bold" />
          </button>

          <div className="w-full h-full flex-grow flex items-center justify-center overflow-hidden">
            <img
              src={props.images[props.currentIndex]?.full ?? null}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <button
            className="hidden sm:block rounded-full p-1 hover:bg-gray-900 active:bg-gray-800 transition-colors cursor-pointer"
            onClick={props.onRequestNext}
          >
            <CaretRight size={32} weight="bold" />
          </button>
        </div>
      </div>
    </div>
  )
  
}