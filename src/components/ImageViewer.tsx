'use client'

import useScrollBlock from '@/hooks/useScrollBlock';
import { clsx } from 'clsx'
import { useCallback, useEffect, useRef, useState } from 'react';

export interface ImageViewerProps {
  currentIndex: number;
  images: {
    thumbnail: string;
    full: string;
  }[];
  onRequestPrevious: () => void;
  onRequestNext: () => void;
  onClose: () => void;
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
      if (event.key === "Escape") props.onClose();
    };
  
    document.addEventListener("keyup", handleKeyPress);
  
    return () => {
      allowScroll();
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [isOpen, props.onRequestPrevious, props.onRequestNext, props.onClose])
  

  return (
    <div
      className={clsx(
        { hidden: props.currentIndex === -1 },
        'fixed z-10 top-0 left-0 w-screen h-screen p-16'
      )}
    >
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm"
        onClick={props.onClose}
      />
      
      {/* Content with solid black background, no blur */}
      <div className="flex flex-col items-center justify-start gap-2 w-full h-full z-20 bg-black p-4 relative">
        <p>{props.currentIndex + 1}/{props.images.length}</p> 
        <div className="w-full h-full flex-1 flex items-center justify-center gap-4 overflow-hidden">
          <button onClick={props.onRequestPrevious}>Prev</button>
          <div className="w-full flex-grow flex items-center justify-center overflow-hidden">
            <img
              src={props.images[props.currentIndex]?.full ?? null}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <button onClick={props.onRequestNext}>Next</button>
        </div>
      </div>
    </div>
  )
  
}