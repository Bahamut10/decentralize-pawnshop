import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { useMemo } from 'react';
import { PAWN, REDEEM } from './page';

type FormProps = {
  active: typeof PAWN | typeof REDEEM;
};

function PawnForm() {
  const _menuItem = useMemo(() => ['Smartphone', 'Gold', 'Car', 'Laptop'], []);

  return (
    <>
      <div className="mb-4">
        <Select label="Select Item" menuItem={_menuItem} />
      </div>
      <div className="mb-6">
        <Input label="Price Estimation" currency="USDT" value={12} readOnly />
      </div>
      <Button variant={BUTTON_VARIANTS.PRIMARY} size={BUTTON_SIZES.MD}>
        Yes, I Agree to Pawn
      </Button>
    </>
  );
}

function RedeemForm() {
  return (
    <>
      <div className="mb-4">
        <Input
          label="TXN ID"
          value="0x987493218749021387492013847"
          placeholder="Input Your Transaction ID"
        />
      </div>
      <div className="mb-6">
        <Input label="XYZ Token Sum" value={1200} currency="XYZ" readOnly />
      </div>
      <Button variant={BUTTON_VARIANTS.PRIMARY} size={BUTTON_SIZES.MD}>
        Redeem
      </Button>
    </>
  );
}

export default function Form(props: FormProps) {
  const { active } = props;

  return (
    <div className="w-full">
      <form className="flex flex-col gap-3 shadow-xl rounded-lg w-1/2 p-12 mx-auto">
        {active === PAWN && <PawnForm />}
        {active === REDEEM && <RedeemForm />}
      </form>
    </div>
  );
}
