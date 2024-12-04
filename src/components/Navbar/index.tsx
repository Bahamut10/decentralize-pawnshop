'use client';

import ConnectWallet from '@/app/pawn/ConnectWallet';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="max-tablet:flex-col max-tablet:gap-5 wrapper flex items-center justify-between">
      <div>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Company Logo"
            width={180}
            height={0}
            className="h-auto"
          />
        </Link>
        {/* <div className="flex font-bold items-center gap-10">
          <Link href="/" className="navbar__link">
            Home
          </Link>
          <Link href="/pawn" className="navbar__link">
            Pawn
          </Link>
        </div> */}
      </div>
      <ConnectWallet />
    </div>
  );
}
