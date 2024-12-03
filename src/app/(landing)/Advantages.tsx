import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import { Icon } from '@iconify/react';

export default function Advantages() {
  return (
    <div className="wrapper max-laptop:flex-col flex gap-12 justify-between">
      <div className="card p-12">
        <Icon
          icon="mdi:shield-lock"
          className="text-main-blue w-12 h-12 bg-acrylic-blue rounded-full p-2"
        />
        <Text variant={TEXT_VARIANTS.HEADING5} className="text-h5">
          Highly Secured
        </Text>
        <Text variant={TEXT_VARIANTS.BODY}>
          Blockchain ensures secure, tamper-proof transactions, while smart
          contracts minimize fraud and errors.
        </Text>
      </div>
      <div className="card p-12">
        <Icon
          icon="mdi:currency-usd"
          className="text-main-blue w-12 h-12 bg-acrylic-blue rounded-full p-2"
        />
        <Text variant={TEXT_VARIANTS.HEADING5} className="text-h5">
          Lower Cost
        </Text>
        <Text variant={TEXT_VARIANTS.BODY} className="font-roboto">
          Offering competitive Administration Fee at a flat $0.5 to $2 per
          transaction; Interest Rate 15% to 24% per annum.
        </Text>
      </div>
      <div className="card p-12">
        <Icon
          icon="mdi:eye"
          className="text-main-blue w-12 h-12 bg-acrylic-blue rounded-full p-2"
        />
        <Text variant={TEXT_VARIANTS.HEADING5} className="text-h5">
          Transparent
        </Text>
        <Text variant={TEXT_VARIANTS.BODY} className="font-roboto">
          AI and real-time data deliver fast, fair, and accurate asset
          valuations.
        </Text>
      </div>
    </div>
  );
}
