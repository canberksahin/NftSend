import { useState, useEffect } from 'react';

const useETHToUSDT = () => {
  const [ethInUSDT, setEthInUSDT] = useState<number>(0);
  useEffect(() => {
    setEthInUSDT(3104.84);
  }, []);

  return { ethInUSDT };
};

export default useETHToUSDT;
