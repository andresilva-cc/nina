import type { Metadata } from 'next';
import { playwriteFont, quicksandFont } from '@/app/fonts';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'NINA',
  description: 'Para sempre em nossos corações',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Nina" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${playwriteFont.variable} ${quicksandFont.variable} antialiased px-4 pt-8 sm:p-8 md:p-12 lg:p-16 xl:px-24 pb-8!`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
