import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import Image from 'next/image';

export default function Technology() {
  return (
    <div className="max-laptop:mt-36 flex gap-36 mt-72 wrapper">
      <div className="max-laptop:hidden flex-1 self-center">
        <Image
          src="/section-3.png"
          alt="a man holding a phone"
          width={580}
          height={0}
          className="h-auto"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center gap-3">
        <Text
          variant={TEXT_VARIANTS.HEADING5}
          className="text-main-blue text-h5"
        >
          Start Now
        </Text>
        <Text variant={TEXT_VARIANTS.HEADING2} className="text-h3">
          Get started with Pawnshop in easy steps
        </Text>
        <Text variant={TEXT_VARIANTS.BODY} className="font-light">
          Get the latest updates and functionalities using Breew wallet as your
          primary source of holding crypto.
        </Text>
        <div className="grid grid-cols-2 gap-3 mt-12">
          <div className="card px-3 py-12 text-center !gap-0">
            <Text variant={TEXT_VARIANTS.HEADING5}>100,000</Text>
            <Text variant={TEXT_VARIANTS.BODY}>Security incidents</Text>
          </div>
          <div className="card px-3 py-12 text-center !gap-0">
            <Text variant={TEXT_VARIANTS.HEADING5}>100,000</Text>
            <Text variant={TEXT_VARIANTS.BODY}>Security incidents</Text>
          </div>
          <div className="card px-3 py-12 text-center !gap-0">
            <Text variant={TEXT_VARIANTS.HEADING5}>100,000</Text>
            <Text variant={TEXT_VARIANTS.BODY}>Security incidents</Text>
          </div>
          <div className="card px-3 py-12 text-center !gap-0">
            <Text variant={TEXT_VARIANTS.HEADING5}>100,000</Text>
            <Text variant={TEXT_VARIANTS.BODY}>Security incidents</Text>
          </div>
        </div>
      </div>
    </div>
  );
}
