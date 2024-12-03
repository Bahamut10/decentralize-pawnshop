import { abi } from './contract-abi';

const SMART_CONTRACT_ADDRESS = '0x87eeeA1820F2F4E9b7B15b697cAF31486471939a';
export const CONTRACT_OWNER_ADDRESS =
  '0xE3906ddE92E4E70C73724C070430e28Fdf520071';

export const contractConfig = {
  address: SMART_CONTRACT_ADDRESS,
  abi,
} as const;
