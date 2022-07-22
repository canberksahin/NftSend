/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';
import { useState } from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import AgainstCollection from './AgainstCollection';
import StepOneProceedButton from './StepOneProceedButton';

interface StepOneProps {
  tokenType: string;
  dropType: string;
  tokenAddress: string | null;
  setTokenType: (value: string) => void;
  setDropType: (value: string) => void;
  setTokenAddress: (value: string) => void;
  setStep: (value: number) => void;
}

const tokenTypes = ['ERC20', 'ERC721', 'ERC1155'];

const dropTypes = [
  { key: 'DIRECT', value: 'Direct' },
  // { key: 'AGAINST_COLLECTION', value: 'Against Collection' },
];

const StepOne = ({
  tokenType,
  dropType,
  tokenAddress,
  setDropType,
  setTokenType,
  setTokenAddress,
  setStep,
}: StepOneProps) => {
  const [isValidAddress, setIsValidAddress] = useState(true);

  return (
    <div>
      <div className="flex-row flex justify-between pb-10">
        <h1 className="text-xl text-white">Welcome</h1>
        <h1 className="text-base text-white">2 step to complete </h1>
      </div>

      <div className="px-12">
        <div className="flex-row flex justify-between">
          <div>
            <h1 className="text-base text-white">1. Choose Token Type</h1>
            <div className="flex-row flex py-5">
              {tokenTypes.map((item) => (
                <div className="pr-5" key={item}>
                  <Button secondary active={tokenType === item} onClick={() => setTokenType(item)}>
                    {item}
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-base text-white">2. Which Kind of Drop you want to do? </h1>
            <div className="flex-row flex py-5">
              {dropTypes.map((item) => (
                <div className="pr-5" key={item.key}>
                  <Button
                    secondary
                    active={dropType === item.key}
                    onClick={() => setDropType(item.key)}
                  >
                    {item.value}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-5">
          <h1 className="text-base text-white">3. Choose Token/Collection </h1>
          <div className="my-5">
            <Input
              placeHolder="0x6754fb3576e87dc3b0a853be9db57e31068833d4"
              value={tokenAddress}
              onChange={(e: any) => setTokenAddress(e?.target.value)}
            />
            {!isValidAddress && (
              <p className="text-base text-rose-600 py-2">Please enter valid token address!</p>
            )}
          </div>
        </div>
        {tokenAddress && (
          <div className="flex justify-center">
            <StepOneProceedButton
              address={tokenAddress}
              setIsValidAddress={setIsValidAddress}
              setStep={setStep}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepOne;
