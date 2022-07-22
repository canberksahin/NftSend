/* eslint-disable no-unused-vars */
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useActiveWeb3React, useMultiSendContract } from '../../hooks';
import { callWithEstimateGas } from '../../utils/estimateGas';
import config from '../../utils/config';
import Button from '../elements/Button';
import { injected } from '../../utils/connections';

const DropButton = ({
  tokenAddress,
  address,
  tokenId,
  tokenType,
  amount,
  isChargeable,
  handleUpdateSlot,
}: any) => {
  const { active, activate } = useActiveWeb3React();
  const multiSendContract = useMultiSendContract(config.multiSendContractAddress);
  const [loading, setLoading] = useState(false);

  const dropERC721 = async () => {
    try {
      setLoading(true);
      const tx = await callWithEstimateGas(multiSendContract, 'transmitERC721', [
        tokenAddress,
        address,
        tokenId,
        isChargeable,
      ]);
      const data = await tx.wait();
      handleUpdateSlot({
        status: 'success',
        transactionHash: data.transactionHash,
      });
      setLoading(false);
    } catch (err: any) {
      if (err.error.message) {
        toast.error(err.error.message);
      } else {
        toast.error(err.message.split('\n')[0]);
      }
      setLoading(false);
    }
  };
  const dropERC1155 = async () => {
    try {
      setLoading(true);
      console.log('dropERC1155', tokenAddress, address, tokenId, amount, isChargeable);
      const tx = await callWithEstimateGas(multiSendContract, 'transmitERC1125', [
        tokenAddress,
        address,
        tokenId,
        amount,
        isChargeable,
      ]);
      const data = await tx.wait();
      handleUpdateSlot({
        status: 'success',
        transactionHash: data.transactionHash,
      });
      setLoading(false);
    } catch (err: any) {
      if (err.error && err.error.message) {
        toast.error(err.error.message);
      } else {
        toast.error(err.message.split('\n')[0]);
      }
      console.log(err);
      setLoading(false);
    }
  };
  const dropERC20 = async () => {
    try {
      setLoading(true);
      const tx = await callWithEstimateGas(multiSendContract, 'transmitERC20', [
        tokenAddress,
        address,
        amount,
        isChargeable,
      ]);
      const data = await tx.wait();
      handleUpdateSlot({
        status: 'success',
        transactionHash: data.transactionHash,
      });
      setLoading(false);
    } catch (err: any) {
      if (err.error.message) {
        toast.error(err.error.message);
      } else {
        toast.error(err.message.split('\n')[0]);
      }
      setLoading(false);
    }
  };

  const onHandleProceed = () => {
    if (tokenType === 'ERC721') {
      dropERC721();
    } else if (tokenType === 'ERC1155') {
      dropERC1155();
    } else if (tokenType === 'ERC20') {
      dropERC20();
    }
  };

  return (
    <div className="flex justify-center">
      {active ? (
        <Button isLoading={loading} onClick={onHandleProceed}>
          Drop
        </Button>
      ) : (
        <Button onClick={() => activate(injected)}>Connect to metamask</Button>
      )}
    </div>
  );
};

export default DropButton;
