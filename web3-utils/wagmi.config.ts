import { abi } from './contract-abi';

const SMART_CONTRACT_ADDRESS = '0x432a5Ec0d94118eE5c2ED1Eaf661C98E9b0B7128';
export const CONTRACT_OWNER_ADDRESS =
  '0xE3906ddE92E4E70C73724C070430e28Fdf520071';

export const contractConfig = {
  address: SMART_CONTRACT_ADDRESS,
  abi,
} as const;
