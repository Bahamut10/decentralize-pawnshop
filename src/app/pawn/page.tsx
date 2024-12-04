'use client';

import { useState } from 'react';
import Form from './Form';
import Tabs from './Tabs';
import { PAWN } from './enum';

export default function RedeemPage() {
  const [active, setActive] = useState(PAWN);

  return (
    <div className="wrapper">
      {/* <div className="flex justify-end">
        <ConnectWallet />
      </div> */}
      <div className="my-6 flex flex-col gap-10 justify-center items-center">
        <Tabs active={active} setActive={setActive} />
        <Form active={active} />
      </div>
    </div>
  );
}
