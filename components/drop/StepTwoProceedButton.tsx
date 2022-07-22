/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { ethers } from 'ethers';
import { forEach } from 'lodash';
import {
  useActiveWeb3React,
  useERC20Contract,
  useERC721Contract,
  useERC1155Contract,
} from '../../hooks';
import Button from '../elements/Button';
import { injected } from '../../utils/connections';
import { getERC1155OwnersOfToken, getERC721OwnersOfToken } from '../../utils/contractHelpers';
import { DropDetails } from '../../pages/drop';

interface StepOneProceedButtonProps {
  dropDetails: DropDetails;
  tokenType: string;
  tokenAddress: string;
  setStep: (step: number) => void;
}

const StepOneProceedButton = ({
  dropDetails,
  tokenType,
  tokenAddress,
  setStep,
}: StepOneProceedButtonProps) => {
  const erc721Contract = useERC721Contract(tokenAddress);
  const erc1155Contract = useERC1155Contract(tokenAddress);
  const erc20Contract = useERC20Contract(tokenAddress);
  const { active, activate, account } = useActiveWeb3React();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const handleERC721Validation = async (values: string[]) => {
    const data = await getERC721OwnersOfToken(values, erc721Contract);
    const notAOwner = data.filter((item: any) => item.owner !== account);
    if (notAOwner.length > 0) {
      setError(`${notAOwner.map((item: any) => item.tokenId).join(', ')} are not owned by you.`);
    } else {
      setStep(3);
    }
  };

  const handleERC1155Validation = async (values: string[]) => {
    debugger;
    const data = await getERC1155OwnersOfToken(values, erc1155Contract, account || '');
    let currentError = '';
    forEach(data, (item: any) => {
      const index = dropDetails.tokenId ? dropDetails.tokenId.indexOf(item.tokenId) : -1;
      if (index >= 0 && parseInt(item.balance, 10) < parseInt(dropDetails.amount[index], 10)) {
        currentError += `${item.tokenId},`;
      }
    });
    if (currentError !== '') {
      setError(
        `The following tokens are not owned by you or do not have enough balance: ${currentError}`,
      );
    } else {
      setStep(3);
    }
  };

  const handleERC20Validation = async () => {
    const data = await erc20Contract.balanceOf(account);
    let totalBalance = 0;
    forEach(dropDetails.amount, (item: any) => {
      totalBalance += parseInt(item, 10);
    });
    if (parseInt(ethers.utils.formatEther(data.toString()), 10) < totalBalance) {
      setError('You do not have enough balance.');
    } else {
      setStep(3);
    }
  };

  const onHandleProceed = async () => {
    setLoading(true);
    setError(null);

    try {
      if (tokenType === 'ERC721') {
        await handleERC721Validation(dropDetails.tokenId || []);
        setLoading(false);
      }
      if (tokenType === 'ERC1155') {
        debugger;
        await handleERC1155Validation(dropDetails.tokenId || []);
        setLoading(false);
      }
      if (tokenType === 'ERC20') {
        await handleERC20Validation();
        setLoading(false);
      }
    } catch (err) {
      setError(
        `Please check your input and try again. If the problem persists, please contact us.`,
      );
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        {active ? (
          <Button isLoading={loading} onClick={onHandleProceed}>
            Proceed
          </Button>
        ) : (
          <Button onClick={() => activate(injected)}>Connect to metamask</Button>
        )}
      </div>
      <br />
      {error && error.length > 0 && <div className="text-red-500 font-semibold">{error}</div>}
    </div>
  );
};

export default StepOneProceedButton;
