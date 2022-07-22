import { useState, useEffect, useCallback } from 'react';
import config from '../utils/config';
import useActiveWeb3React from './useActiveWeb3React';
import { useERC20Contract } from './useContract';

const useIsApprovalERC20 = (amount: string) => {
  const { account } = useActiveWeb3React();
  const contract = useERC20Contract(config.multiSendContractAddress);
  const [loading, setLoading] = useState<boolean>(false);
  const [isAllowToTrans, setIsAllowToTrans] = useState<boolean>(false);
  const checkAllowance = useCallback(
    async (amountValue: string) => {
      setLoading(true);
      try {
        const allowance = await contract.allowance(account, config.multiSendContractAddress);

        setIsAllowToTrans(allowance.toNumber() >= parseFloat(amountValue));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [contract, account],
  );

  useEffect(() => {
    if (amount) {
      checkAllowance(amount);
    }
  }, [checkAllowance, amount]);

  const checkAgain = () => {
    setTimeout(() => {
      checkAllowance(amount);
    }, 1000);
  };

  return { isAllowToTrans, loading, checkAllowance: checkAgain };
};

export default useIsApprovalERC20;
