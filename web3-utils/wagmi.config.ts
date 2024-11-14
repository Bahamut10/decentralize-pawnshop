import { abi } from './contract-abi';

const SMART_CONTRACT_ADDRESS = '0x04aC130B88A95226fAFEF5Ee284F1702d3e18a9C';

export const contractConfig = {
  address: SMART_CONTRACT_ADDRESS,
  abi,
} as const;
