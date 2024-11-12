'use client';

import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import { useCallback, useState } from 'react';

const PAWN = 'PAWN';
const REDEEM = 'REDEEM';

export default function Tabs() {
  const [active, setActive] = useState(PAWN);

  const handleOnSwitchTab = useCallback((key: typeof PAWN | typeof REDEEM) => {
    setActive(key);
  }, []);

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
        I want to pawn
      </Button>
      <Button
        variant={BUTTON_VARIANTS.GHOST}
        size={BUTTON_SIZES.MD}
        onClick={() => handleOnSwitchTab(REDEEM)}
        className={`font-bold rounded-l-none hover:bg-main-blue hover:text-white ${
          active === REDEEM ? '!bg-main-blue text-white' : ''
        }`}
      >
        I want to redeem
      </Button>
    </div>
  );
}
