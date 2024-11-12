'use client';

import { useState } from 'react';
import ConnectWallet from './ConnectWallet';
import Form from './Form';
import Tabs from './Tabs';

export const PAWN = 'PAWN';
export const REDEEM = 'REDEEM';

export default function LandingPage() {
  const [active, setActive] = useState(PAWN);

  return (
    <div className="wrapper">
      <div className="flex justify-end">
        <ConnectWallet />
      </div>
      <div className="mt-32 flex flex-col gap-10 justify-center items-center">
        <Tabs active={active} setActive={setActive} />
        <Form active={active} />
      </div>
    </div>
  );
}
