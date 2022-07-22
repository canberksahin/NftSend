import { useState, useEffect, useCallback } from 'react';
import config from '../utils/config';
import useActiveWeb3React from './useActiveWeb3React';
import { useERC721Contract } from './useContract';

const useIsApprovalForAll = (address: string) => {
  const { account } = useActiveWeb3React();
  const contract = useERC721Contract(address);
  const [loading, setLoading] = useState<boolean>(false);
  const [isApproved, setIsApproved] = useState<boolean>(false);

  const checkFunc = useCallback(
    async (accountValue: string) => {
      setLoading(true);
      try {
        const status = await contract.isApprovedForAll(
          accountValue,
          config.multiSendContractAddress,
        );
        setIsApproved(status);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    [contract],
  );

  useEffect(() => {
    if (account) {
      checkFunc(account);
    }
  }, [checkFunc, account]);

  return { isApproved, loading, checkApproval: checkFunc };
};

export default useIsApprovalForAll;
