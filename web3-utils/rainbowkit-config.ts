import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';

const liskMainnet = {
  id: 1135,
  name: 'Lisk Mainnet',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1214.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Lisk', symbol: 'LSK', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.api.lisk.com'] },
  },
  blockExplorers: {
    default: { name: 'Blockscout Lisk', url: 'https://blockscout.lisk.com' },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'Decentralized Pawnshop',
  projectId: process.env.NEXT_PUBLIC_RAINBOWKIT_REOWN_PROJECT_ID || '',
  chains: [liskMainnet],
  // ssr: true, // If your dApp uses server side rendering (SSR)
});
