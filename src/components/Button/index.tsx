import { useMemo } from 'react';
import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  ButtonSizes,
  ButtonVariants,
} from './enum';
import clsx from 'clsx';

type ButtonProps = {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
  size?: keyof ButtonSizes;
  variant: keyof ButtonVariants;
  onClick?: () => void;
};

export default function Button(props: ButtonProps) {
  const { as, children, className, size, variant, ...restProps } = props;

  const Element = as ?? 'button';

  const _size = useMemo(() => {
    switch (size) {
      case BUTTON_SIZES.SM:
        return 'px-6 py-3 text-body rounded-[12px]';
      case BUTTON_SIZES.MD:
        return 'px-6 py-5 text-body rounded-[12px]';
      case BUTTON_SIZES.LG:
        return 'px-6 py-5 text-h5 rounded-[12px]';
    }
  }, [size]);

  const _className = useMemo(() => {
    let _class = 'font-bold border-2 border-main-blue';
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        _class = clsx(
          _class,
          'bg-main-blue text-white hover:bg-transparent hover:text-main-blue'
        );
        break;
      case BUTTON_VARIANTS.SECONDARY:
        _class = clsx(
          _class,
          'bg-transparent text-main-blue hover:bg-main-blue hover:text-white'
        );
        break;
      case BUTTON_VARIANTS.GHOST:
        _class = 'bg-transparent text-inherit';
        break;
    }

    return clsx(_size, _class, className);
  }, [_size, className, variant]);

  return (
    <Element className={_className} {...restProps}>
      {children}
    </Element>
  );
}
