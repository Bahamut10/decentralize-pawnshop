import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';

export default function ConnectWallet() {
  return (
    <Button variant={BUTTON_VARIANTS.PRIMARY} size={BUTTON_SIZES.MD}>
      Connect a Wallet
    </Button>
  );
}
