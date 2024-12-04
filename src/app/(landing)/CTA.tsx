import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import Image from 'next/image';

export default function CTA() {
  return (
    <div className="wrapper mt-72 max-laptop:mt-36">
      <div className="flex gap-12 bg-main-blue rounded-3xl p-12">
        <div className="flex-[2] max-tablet:text-center">
          <Text variant={TEXT_VARIANTS.HEADING1} className="text-white text-h3">
            Check Your Assets Value Now!
          </Text>
          <Button
            variant={BUTTON_VARIANTS.PRIMARY}
            size={BUTTON_SIZES.MD}
            className="bg-white !text-main-blue hover:!bg-acrylic-blue mt-12"
          >
            Check Asset Value
          </Button>
        </div>
        <div className="max-laptop:hidden flex-1 relative">
          <Image
            src="/section-4.png"
            alt="man holding a phone"
            width={0}
            height={0}
            className="w-[600px] max-w-none h-auto -bottom-12 -left-3/4 absolute"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
