'use client';

import Button from '@/components/Button';
import { BUTTON_SIZES, BUTTON_VARIANTS } from '@/components/Button/enum';
import Input from '@/components/Input';
import Select from '@/components/Select';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { useWriteContract } from 'wagmi';
import {
  CONTRACT_OWNER_ADDRESS,
  contractConfig,
} from '../../../web3-utils/wagmi.config';
import { PAWN, PAWN_PRICE, REDEEM } from './enum';
import { PawnItem } from './types';

type FormProps = {
  active: typeof PAWN | typeof REDEEM | string;
};

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
  // const { data } = useReadContract();

  const handlePawn = useCallback(async () => {
    await writeContract({
      ...contractConfig,
      functionName: 'buyShares',
      args: [selected.usdtValue / PAWN_PRICE],
    });
  }, [selected.usdtValue, writeContract]);

  const handleSetSelected = useCallback(
    (val: PawnItem) => setSelected(val),
    []
  );

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
      <div className="flex items-center gap-3 mb-6">
        <Input
          label="Price Estimation"
          currency="USDT"
          value={selected.usdtValue}
          readOnly
        />
        <ArrowRightIcon
          aria-hidden="true"
          className="inline h-10 w-19 font-bold text-stormy-gray"
        />
        <Input
          label="Token Estimation"
          labelClassName="text-right"
          currency="PAWN"
          value={selected.usdtValue / PAWN_PRICE}
          readOnly
        />
      </div>
      <Button
        variant={BUTTON_VARIANTS.PRIMARY}
        size={BUTTON_SIZES.MD}
        onClick={handlePawn}
        disabled={selected.usdtValue === 0 || isPending}
      >
        {isPending ? `We're processing...` : 'Yes, I Agree to Pawn'}
      </Button>
    </>
  );
}

function RedeemForm() {
  const [isRetrieveData, setIsRetrieveData] = useState(false);
  const [txnHash, setTxnHash] = useState('');
  const [sharesValue, setSharesValue] = useState(0);

  const { isPending, isSuccess, writeContract } = useWriteContract();

  const { isFetching, error } = useQuery({
    queryKey: ['getTrxInfo', txnHash],
    queryFn: async () => {
      const res = await fetch(
        `https://sepolia-blockscout.lisk.com/api/v2/transactions/${txnHash}/logs`
      );
      const data = await res.json();

      if (res.status > 400) {
        toast.error('Something went wrong. Please recheck your input.');
      }
      setIsRetrieveData(false);
      setSharesValue(data?.items[0]?.decoded?.parameters[1]?.value);
      return data;
    },
    enabled: isRetrieveData,
  });

  const handleRedeem = useCallback(async () => {
    if (!sharesValue) setIsRetrieveData(true);
    else
      await writeContract({
        ...contractConfig,
        functionName: 'transferShares',
        args: [CONTRACT_OWNER_ADDRESS, sharesValue],
      });
  }, [sharesValue, writeContract]);

  const renderCTA = useMemo(() => {
    if (isFetching) return 'Getting Data...';
    if (isPending) return 'Processing...';
    if (sharesValue) return 'Redeem';
    return 'Check Transaction';
  }, [isFetching, isPending, sharesValue]);

  if (error) {
    toast.error('Something Went Wrong. Please try again later.');
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Redeem sucessfully completed.');
      setTxnHash('');
      setSharesValue(0);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="mb-4">
        <Input
          label="TXN Hash"
          value={txnHash}
          onChange={(e) => {
            setTxnHash((e.target as HTMLInputElement).value);
          }}
          placeholder="Input Your Transaction ID"
        />
      </div>
      <div className="mb-6">
        <Input
          label="Token Amount"
          value={sharesValue ?? 0}
          currency="PAWN"
          readOnly
        />
      </div>
      <Button
        variant={BUTTON_VARIANTS.PRIMARY}
        onClick={handleRedeem}
        disabled={isFetching || !txnHash || isPending}
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
      <form className="flex flex-col gap-3 shadow-xl rounded-lg w-1/2 p-12 mx-auto">
        {active === PAWN && <PawnForm />}
        {active === REDEEM && <RedeemForm />}
      </form>
    </div>
  );
}
