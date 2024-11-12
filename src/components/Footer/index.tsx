import Text from '../Text';
import { TEXT_VARIANTS } from '../Text/enum';

export default function Footer() {
  return (
    <div className="flex justify-center items-center py-3 bg-stormy-grey">
      <Text variant={TEXT_VARIANTS.HEADING6} className="align-middle">
        Copyright © {new Date().getFullYear()} • NFT Marketplace
      </Text>
    </div>
  );
}
