import clsx from 'clsx';
import { TextVariants } from './enum';

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  style?: object;
  variant: TextVariants;
  font?: 'space-mono' | 'work-sans';
};

export default function Text(props: TextProps) {
  const { as, children, className, variant, font, ...restProps } = props;

  const Element = as ?? variant.element;
  const combinedClassName = clsx(
    variant.className,
    className,
    font ? `font-${font}` : 'font-space-mono'
  );

  return (
    <Element className={combinedClassName} {...restProps}>
      {children}
    </Element>
  );
}
