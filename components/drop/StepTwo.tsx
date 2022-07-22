/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { DropDetails } from '../../pages/drop';
import Direct from './Direct';
import AgainstCollection from './AgainstCollection';
import StepTwoProceedButton from './StepTwoProceedButton';
import { splitERC1125Token, splitERC20Token, splitERC721Token } from './helpers';

interface StepTwoProps {
  tokenAddress: string;
  tokenType: string;
  dropType: string;
  dropInputValue: string;
  dropDetails: DropDetails;
  setDropInputValue: (value: string) => void;
  setDropDetails: (value: DropDetails) => void;
  goBack: () => void;
  setStep: (value: number) => void;
}

const StepOne = ({
  tokenAddress,
  tokenType,
  dropType,
  dropInputValue,
  dropDetails,
  setDropInputValue,
  setDropDetails,
  goBack,
  setStep,
}: StepTwoProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isManual, setIsManual] = useState(false);
  const [csvData, setCsvData] = useState();

  const handleERC20 = () => {
    const { address, amount } = splitERC20Token(dropInputValue);
    setDropDetails({
      recipientAddress: address,
      amount,
    });
  };

  const handleERC721 = () => {
    const { address, tokenId } = splitERC721Token(dropInputValue);
    setDropDetails({
      recipientAddress: address,
      tokenId,
      amount: [],
    });
  };

  const handleERC1155 = () => {
    const { address, tokenId, amount } = splitERC1125Token(dropInputValue);
    setDropDetails({
      recipientAddress: address,
      tokenId,
      amount,
    });
  };

  const onHandleProceed = () => {
    if (tokenType === 'ERC20') {
      handleERC20();
    }
    if (tokenType === 'ERC721') {
      handleERC721();
    }
    if (tokenType === 'ERC1155') {
      handleERC1155();
    }
  };

  const onHandleCsvData = (values: any) => {
    let string = '';
    values.map((item: any) => {
      string = `${string + item.address},${item.amount}\n`;
      return null;
    });
    setDropInputValue(string);
    setIsManual(true);
  };

  useEffect(() => {
    onHandleProceed();
  }, [dropInputValue]);

  console.log('dropDetails', dropDetails);

  return (
    <div>
      <div className="flex-row flex justify-between pb-10">
        <div className="text-base text-white inline items-center cursor-pointer" onClick={goBack}>
          back
        </div>
        <h1 className="text-base text-white">2 step to complete </h1>
      </div>
      {dropType === 'DIRECT' && (
        <Direct
          dropInputValue={dropInputValue}
          isManual={isManual}
          setIsManual={setIsManual}
          setDropInputValue={setDropInputValue}
          setCsvData={onHandleCsvData}
        />
      )}
      {dropType === 'AGAINST_COLLECTION' && <AgainstCollection />}
      <div className="flex justify-center mt-10">
        <StepTwoProceedButton
          dropDetails={dropDetails}
          tokenType={tokenType}
          tokenAddress={tokenAddress}
          setStep={setStep}
        />
      </div>
    </div>
  );
};

export default StepOne;
