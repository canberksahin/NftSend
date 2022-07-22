/* eslint-disable no-unused-vars */
import ApproveButton from './ApproveButton';
import { DropDetails } from '../../pages/drop';

interface StepThreeProps {
  tokenAddress: string;
  dropDetails: DropDetails;
  tokenType: string;
  dropType: string;
  onHandleStepThree: () => void;
  setStep: (step: number) => void;
}

const StepThree = ({
  tokenType,
  tokenAddress,
  dropDetails,
  dropType,
  onHandleStepThree,
  setStep,
}: StepThreeProps) => (
  <div className="step-three">
    <div className="flex justify-center">
      <h1 className="text-2xl text-white">Summary</h1>
    </div>
    <div className="mt-12">
      <div className="flex justify-center mb-4">
        <h1 className="text-base text-white pr-10 w-1/4">My Contract Address</h1>
        <div className="text-base text-white">
          -----------------------------------------------------------------
        </div>
        <p className="text-base text-white font-semibold gradient_text pl-5 w-1/3">
          {tokenAddress}
        </p>
      </div>
      {dropType === 'AGAINST_COLLECTION' && (
        <div className="flex justify-center mb-4">
          <h1 className="text-base text-white pr-10 w-1/4">Drop Contract Address</h1>
          <div className="text-base text-white">
            -----------------------------------------------------------------
          </div>
          <p className="text-base text-white font-semibold gradient_text pl-5 w-1/3">
            0x17458511BC8afd6F0550DA3180f35565F56cca03 | DEVS
          </p>
        </div>
      )}
      {dropType === 'AGAINST_COLLECTION' && (
        <div className="flex justify-center mb-4">
          <h1 className="text-base text-white pr-10 w-1/4">Drop Collection Network</h1>
          <div className="text-base text-white">
            -----------------------------------------------------------------
          </div>
          <p className="text-base text-white font-semibold gradient_text pl-5 w-1/3">ETHEREUM</p>
        </div>
      )}
      <div className="flex justify-center mb-4">
        <h1 className="text-base text-white pr-10 w-1/4">Drop Address Count</h1>
        <div className="text-base text-white">
          -----------------------------------------------------------------
        </div>
        <p className="text-base text-white font-semibold gradient_text pl-5 w-1/3">
          {dropDetails.recipientAddress.length}
        </p>
      </div>
      <div className="flex justify-center mb-4">
        <h1 className="text-base text-white pr-10 w-1/4">Network in which drop will happen</h1>
        <div className="text-base text-white">
          -----------------------------------------------------------------
        </div>
        <p className="text-base text-white font-semibold gradient_text pl-5 w-1/3">Polygon</p>
      </div>
      {dropType === 'AGAINST_COLLECTION' && (
        <div className="flex justify-center mb-4">
          <h1 className="text-base text-white pr-10 w-1/4">Attributes Chosen</h1>
          <div className="text-base text-white">
            -----------------------------------------------------------------
          </div>
          <p className="text-base text-white font-semibold gradient_text pl-5 w-1/3">
            Top 50 holders of | DEVS | PUNKS | KITTIES{' '}
          </p>
        </div>
      )}
    </div>
    <div className="flex justify-center mt-10">
      <h1 className="text-base text-white font-semibold">Something went wrong? </h1>
      <a className="text-base  font-semibold text-red-500 ml-2" href="/" onClick={() => setStep(2)}>
        Edit again
      </a>
    </div>
    <div className="flex justify-center mt-10">
      <ApproveButton
        address={tokenAddress}
        tokenType={tokenType}
        onHandleStepThree={onHandleStepThree}
      />
    </div>
  </div>
);

export default StepThree;
