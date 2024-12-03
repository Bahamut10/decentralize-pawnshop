export interface TextVariants {
  element: keyof JSX.IntrinsicElements;
  className: string;
}

export const TEXT_VARIANTS = {
  HEADING1: {
    element: 'h1' as keyof JSX.IntrinsicElements,
    className: 'font-roboto font-black laptop:text-h1',
  },
  HEADING2: {
    element: 'h2' as keyof JSX.IntrinsicElements,
    className: 'font-roboto font-black laptop:text-h2',
  },
  HEADING3: {
    element: 'h3' as keyof JSX.IntrinsicElements,
    className: 'font-roboto font-black laptop:text-h3',
  },
  HEADING4: {
    element: 'h4' as keyof JSX.IntrinsicElements,
    className: 'font-roboto font-black laptop:text-h4',
  },
  HEADING5: {
    element: 'h5' as keyof JSX.IntrinsicElements,
    className: 'font-roboto font-black laptop:text-h5',
  },
  BODY: {
    element: 'p' as keyof JSX.IntrinsicElements,
    className: 'font-light laptop:text-body',
  },
  CAPTION: {
    element: 'span' as keyof JSX.IntrinsicElements,
    className: 'font-light laptop:text-caption',
  },
};
