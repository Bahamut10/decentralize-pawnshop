import Link from 'next/link';
import Text from '../Text';
import { TEXT_VARIANTS } from '../Text/enum';
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center py-8 gap-8 bg-cloudy-gray">
      <Link href="mailto:" className="social__icon">
        <Icon icon="mdi:email-outline" fontSize={20} className="z-10" />
      </Link>
      <Text variant={TEXT_VARIANTS.CAPTION} className="align-middle">
        Copyright © {new Date().getFullYear()} • PAWNY
      </Text>
    </div>
  );
}
