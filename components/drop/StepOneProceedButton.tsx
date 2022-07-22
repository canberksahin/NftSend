/* eslint-disable no-unused-vars */
import { ethers } from 'ethers';
import { useActiveWeb3React } from '../../hooks';
import Button from '../elements/Button';
import { injected } from '../../utils/connections';

interface StepOneProceedButtonProps {
  address: string;
  setStep: (step: number) => void;
  setIsValidAddress: (value: boolean) => void;
}

const StepOneProceedButton = ({
  address,
  setStep,
  setIsValidAddress,
}: StepOneProceedButtonProps) => {
  const { active, activate } = useActiveWeb3React();

  const onHandleProceed = () => {
    if (address) {
      const isValid = ethers.utils.isAddress(address);
      setIsValidAddress(isValid);
      if (isValid) {
        setStep(2);
      }
    }
  };

  return (
    <div className="flex justify-center">
      {active ? (
        <Button isLoading={false} onClick={onHandleProceed}>
          Proceed
        </Button>
      ) : (
        <Button onClick={() => activate(injected)}>Connect to metamask</Button>
      )}
    </div>
  );
};

export default StepOneProceedButton;
