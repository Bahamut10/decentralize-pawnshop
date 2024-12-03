'use client';

import { useCallback, useMemo } from 'react';
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
  disabled?: boolean;
};

export default function Button(props: ButtonProps) {
  const {
    as,
    children,
    className,
    size,
    variant,
    onClick,
    disabled,
    ...restProps
  } = props;

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

    if (disabled) {
      _class = clsx(
        _class,
        '!bg-cloudy-gray !text-stormy-gray !cursor-not-allowed !border-cloudy-gray'
      );
    }

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
  }, [_size, className, disabled, variant]);

  const _onClick = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      onClick?.();
    },
    [onClick]
  );

  const _disabled = disabled ? { disabled } : {};

  return (
    <Element
      className={_className}
      onClick={_onClick}
      {..._disabled}
      {...restProps}
    >
      {children}
    </Element>
  );
}
