import { JSX, ReactNode } from 'react';
import clsx from 'clsx';

const variants = {
  h1: {
    element: 'h1',
    classes: 'font-title text-4xl uppercase',
  },
  h2: {
    element: 'h2',
    classes: 'font-title text-2xl uppercase',
  },
  body: {
    element: 'p',
    classes: 'font-body',
  },
  handwritten: {
    element: 'p',
    classes: 'font-title',
  },
};

interface TextProps {
  variant?: keyof typeof variants
  element?: keyof JSX.IntrinsicElements
  children: ReactNode
  className?: string
}

export function Text({
  variant = 'body', element, children, className,
}: TextProps) {
  const Tag = (element || variants[variant].element) as keyof JSX.IntrinsicElements;

  return (
    <Tag className={clsx(variants[variant].classes, className)}>
      { children }
    </Tag>
  );
}