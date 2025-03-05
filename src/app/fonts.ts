import { Playwrite_IT_Moderna } from "next/font/google";
import { Quicksand } from "next/font/google";

export const playwriteFont = Playwrite_IT_Moderna({
  variable: "--font-title",
  weight: ['400'],
});

export const quicksandFont = Quicksand({
  variable: "--font-body",
  weight: ['500'],
  subsets: ['latin']
})