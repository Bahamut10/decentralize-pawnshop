export interface TextVariants {
  element: keyof JSX.IntrinsicElements;
  className: string;
}

export const TEXT_VARIANTS = {
  HEADING1: {
    element: 'h1' as keyof JSX.IntrinsicElements,
    className: 'laptop:text-h1',
  },
  HEADING2: {
    element: 'h2' as keyof JSX.IntrinsicElements,
    className: 'laptop:text-h2',
  },
  HEADING3: {
    element: 'h3' as keyof JSX.IntrinsicElements,
    className: 'laptop:text-h3',
  },
  HEADING4: {
    element: 'h4' as keyof JSX.IntrinsicElements,
    className: 'laptop:text-h4',
  },
  HEADING5: {
    element: 'h5' as keyof JSX.IntrinsicElements,
    className: 'laptop:text-h5',
  },
  HEADING6: {
    element: 'h6' as keyof JSX.IntrinsicElements,
    className: 'laptop:text-h6',
  },
  BODY: {
    element: 'p' as keyof JSX.IntrinsicElements,
    className: 'laptop:text-body',
  },
  CAPTION: {
    element: 'span' as keyof JSX.IntrinsicElements,
    className: 'laptop:text-caption',
  },
};
