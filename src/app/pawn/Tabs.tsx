'use client';

import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import { useCallback } from 'react';
import { PAWN, REDEEM } from './enum';

type TabsProps = {
  active: typeof PAWN | typeof REDEEM | string;
  setActive: (key: typeof PAWN | typeof REDEEM) => void;
};

export default function Tabs(props: TabsProps) {
  const { active, setActive } = props;

  const handleOnSwitchTab = useCallback(
    (key: typeof PAWN | typeof REDEEM) => {
      setActive(key);
    },
    [setActive]
  );

  return (
    <div className="flex shadow-lg rounded-lg">
      <Button
        variant={BUTTON_VARIANTS.GHOST}
        size={BUTTON_SIZES.MD}
        onClick={() => handleOnSwitchTab('PAWN')}
        className={`font-bold rounded-r-none hover:bg-main-blue hover:text-white ${
          active === PAWN ? '!bg-main-blue text-white' : ''
        }`}
      >
        I Want to Pawn
      </Button>
      <Button
        variant={BUTTON_VARIANTS.GHOST}
        size={BUTTON_SIZES.MD}
        onClick={() => handleOnSwitchTab(REDEEM)}
        className={`font-bold rounded-l-none hover:bg-main-blue hover:text-white ${
          active === REDEEM ? '!bg-main-blue text-white' : ''
        }`}
      >
        I Want to Redeem
      </Button>
    </div>
  );
}
