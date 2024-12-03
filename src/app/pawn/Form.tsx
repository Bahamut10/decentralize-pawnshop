'use client';

import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import {
  CONTRACT_OWNER_ADDRESS,
  contractConfig,
} from '../../../web3-utils/wagmi.config';
import { PAWN, REDEEM } from './enum';
import { PawnItem } from './types';

type FormProps = {
  active: typeof PAWN | typeof REDEEM | string;
};

interface NFTMetadata {
  name: string;
  itemType: string;
  description: string;
  value: number;
  startDate: Date;
  endDate: Date;
}

function PawnForm() {
  // const _menuItem = useMemo(() => ['Smartphone', 'Gold', 'Car', 'Laptop'], []);
  const _menuItem: Array<PawnItem> = useMemo(
    () => [
      {
        item: 'Choose Item',
        usdtValue: 0,
      },
      {
        item: 'Smartphone',
        usdtValue: 1200,
      },
      {
        item: '10gr Gold',
        usdtValue: 1200,
      },
      {
        item: 'Car',
        usdtValue: 150000,
      },
      {
        item: 'Laptop',
        usdtValue: 1800,
      },
      {
        item: 'Luxury Bags',
        usdtValue: 13000,
      },
      {
        item: 'Jewellery',
        usdtValue: 3000,
      },
    ],
    []
  );

  const [selected, setSelected] = useState(_menuItem[0]);
  const { isPending, isSuccess, writeContract } = useWriteContract();
  const { address, isDisconnected } = useAccount();

  const handlePawn = useCallback(async () => {
    await writeContract({
      ...contractConfig,
      functionName: 'mintNFT',
      args: [address, selected.item, ''],
    });
  }, [address, selected.item, writeContract]);

  const handleSetSelected = (val: PawnItem) => setSelected(val);

  useEffect(() => {
    if (isSuccess) {
      toast.success('Your transaction submitted successfully');
    }
  }, [isSuccess]);

  return (
    <>
      <div className="mb-4">
        <Select
          label="Select Item"
          selected={selected}
          setSelected={handleSetSelected}
          menuItem={_menuItem}
        />
      </div>
      <Input
        label="Price Estimation"
        className="mb-6"
        currency="USDT"
        value={selected.usdtValue}
        readOnly
      />
      <Button
        variant={BUTTON_VARIANTS.PRIMARY}
        size={BUTTON_SIZES.MD}
        onClick={handlePawn}
        disabled={selected.usdtValue === 0 || isPending || isDisconnected}
      >
        {isPending ? `We're processing...` : 'Yes, I Agree to Pawn'}
      </Button>
    </>
  );
}

function RedeemForm() {
  const [isRetrieveData, setIsRetrieveData] = useState(false);
  const [nftId, setNFTId] = useState('');
  const [sharesValue, setSharesValue] = useState<NFTMetadata | null>(null);

  const { data, isFetching, isFetched } = useReadContract({
    ...contractConfig,
    functionName: 'getTokenMetadata',
    args: [nftId],
    query: {
      enabled: isRetrieveData,
    },
  });

  const { address, isDisconnected } = useAccount();

  const {
    writeContract: redeem,
    isPending,
    isSuccess: isRedeemSuccess,
  } = useWriteContract();

  const handleNFTIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSharesValue(null);
    setNFTId(e.target.value);
  };

  const renderCTA = useMemo(() => {
    if (isPending) return 'Processing...';
    if (isFetching) return 'Getting Data...';
    if (sharesValue) return 'Redeem';
    return 'Check Transaction';
  }, [isFetching, isPending, sharesValue]);

  const handleRetrieveNFTData = async () => {
    if (!sharesValue) {
      setIsRetrieveData(true);
    } else {
      await redeem({
        ...contractConfig,
        functionName: 'safeTransferFrom',
        args: [address, CONTRACT_OWNER_ADDRESS, nftId],
      });
    }
  };

  useEffect(() => {
    if (isFetched) {
      setIsRetrieveData(false);
      setSharesValue(data as NFTMetadata);

      if (!data) {
        toast.error('Data Not Found.');
      }
    }
  }, [data, isFetched]);

  useEffect(() => {
    if (isRedeemSuccess) {
      setNFTId('');
      setSharesValue(null);
    }
  }, [isRedeemSuccess]);

  return (
    <>
      <div className="mb-4">
        <Input
          label="NFT ID"
          value={nftId}
          onChange={handleNFTIDChange}
          placeholder="Input Your NFT ID"
        />
      </div>
      <div className="mb-6">
        <Input label="Token Amount" value={sharesValue?.value ?? ''} readOnly />
      </div>
      <Button
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={handleRetrieveNFTData}
        disabled={!nftId || isFetching || isPending || isDisconnected}
        size={BUTTON_SIZES.MD}
      >
        {renderCTA}
      </Button>
    </>
  );
}

export default function Form(props: FormProps) {
  const { active } = props;

  return (
    <div className="w-full">
      <form className="flex flex-col gap-3 shadow-xl rounded-lg laptop:w-1/2 p-12 mx-auto">
        {active === PAWN && <PawnForm />}
        {active === REDEEM && <RedeemForm />}
      </form>
    </div>
  );
}
