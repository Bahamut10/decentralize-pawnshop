'use client';

import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="wrapper flex py-32">
      <div className="flex flex-col flex-1 justify-center">
        <>
          <Text variant={TEXT_VARIANTS.HEADING1} className="text-h2">
            Get the <span className="text-main-blue">Best Value</span> for Your
            Assets
          </Text>
          <Text variant={TEXT_VARIANTS.BODY} className="mt-8">
            Get more cash, repay less—The pawnshop with lower fees than
            traditional oness, secure and transparent.
          </Text>
        </>
        <Button
          variant={BUTTON_VARIANTS.PRIMARY}
          size={BUTTON_SIZES.MD}
          className="mt-12 w-fit"
        >
          <Link href="/pawn">Check Asset Value</Link>
        </Button>
      </div>
      <div className="flex-1 max-desktop:hidden">
        <Image
          src="/hero.svg"
          alt="women holding a phone"
          width={0}
          height={0}
          className="w-full h-auto"
          unoptimized
        />
      </div>
    </div>
  );
}
