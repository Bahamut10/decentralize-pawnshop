import Text from '@/components/Text';
import { TEXT_VARIANTS } from '@/components/Text/enum';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function GetStarted() {
  const steps = [
    {
      icon: <Icon icon="mdi:smartphone" className="w-8 h-8 text-main-blue" />,
      number: '1',
      title: 'Connect With Wallet',
      description:
        'The Breew app is available on apple store and playstore for easy downloads.',
    },
    {
      icon: <Icon icon="mdi:wallet" className="w-8 h-8 text-main-blue" />,
      number: '2',
      title: 'Apply For Asset Pawn',
      description:
        'Create your Breew wallet with the fastest flow and the most simple layouts.',
    },
    {
      icon: <Icon icon="mdi:currency-usd" className="w-8 h-8 text-main-blue" />,
      number: '3',
      title: 'Submit Asset',
      description:
        'Conduct speedy crypto transactions using the Breew app today.',
    },
    {
      icon: <Icon icon="mdi:refresh" className="w-8 h-8 text-main-blue" />,
      number: '4',
      title: 'Fund Disbursed',
      description:
        'Conduct speedy crypto transactions using the Breew app today.',
    },
  ];
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
        {/* <Text variant={TEXT_VARIANTS.BODY} className="font-light">
          Get the latest updates and functionalities using Breew wallet as your
          primary source of holding crypto.
        </Text> */}
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-6 mt-5">
            <div className="flex-shrink-0 w-16 h-16 bg-acrylic-blue rounded-2xl flex items-center justify-center">
              {step.icon}
            </div>
            <div className="space-y-1">
              <Text variant={TEXT_VARIANTS.HEADING5}>
                {step.number}. {step.title}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
