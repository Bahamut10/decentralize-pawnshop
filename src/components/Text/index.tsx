import clsx from 'clsx';
import { TextVariants } from './enum';

type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  style?: object;
  variant: TextVariants;
};

export default function Text(props: TextProps) {
  const { as, children, className, variant, ...restProps } = props;

  const Element = as ?? variant.element;
  const combinedClassName = clsx(variant.className, className);

  return (
    <Element className={combinedClassName} {...restProps}>
      {children}
    </Element>
  );
}
