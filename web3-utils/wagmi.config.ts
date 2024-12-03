import { abi } from './contract-abi';

const SMART_CONTRACT_ADDRESS = '0x31697fd16C2340cbd7094De4Db83DafC93b6d764';
export const CONTRACT_OWNER_ADDRESS =
  '0xE3906ddE92E4E70C73724C070430e28Fdf520071';

export const contractConfig = {
  address: SMART_CONTRACT_ADDRESS,
  abi,
} as const;
