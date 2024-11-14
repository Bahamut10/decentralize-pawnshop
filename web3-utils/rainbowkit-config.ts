import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { liskSepolia } from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'Decentralized Pawnshop',
  projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_REOWN_PROJECT_ID || '',
  chains: [liskSepolia],
  // ssr: true, // If your dApp uses server side rendering (SSR)
});
