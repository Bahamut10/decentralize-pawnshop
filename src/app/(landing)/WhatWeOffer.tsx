import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import Image from 'next/image';

export default function WhatWeOffer() {
  return (
    <div className="max-laptop:mt-36 mt-72 bg-cloudy-gray overflow-hidden">
      <div className="flex gap-36 !py-36 wrapper">
        <div className="flex flex-col flex-1 justify-center gap-3">
          <Text
            variant={TEXT_VARIANTS.HEADING5}
            className="text-main-blue text-h5"
          >
            What We Offer
          </Text>
          <Text variant={TEXT_VARIANTS.HEADING2} className="text-h3">
            The modern way to pawn
          </Text>
          <Text variant={TEXT_VARIANTS.BODY} className="font-light">
            Embrace the future of pawning with Web3—offering secure, fast, and
            flexible transactions. Stay updated with the latest features, all in
            one convenient platform.
          </Text>
          {/* <ul className="list-outside list-none">
            <li className="workingway__point">Highly Secured</li>
            <li className="workingway__point">Lower Cost</li>
            <li className="workingway__point">Transparent</li>
          </ul> */}
        </div>
        <div className="max-laptop:hidden flex-1 relative">
          <Image
            src="/section-2.svg"
            alt="preview"
            width={0}
            height={0}
            className="w-[1000px] max-w-none h-auto object-cover absolute -left-32 -top-10"
          />
        </div>
      </div>
    </div>
  );
}
