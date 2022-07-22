/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import DropButton from './DropButton';
import { Slot } from '../../pages/drop';
import Button from '../elements/Button';

interface StepFourProps {
  slots: Array<Slot>;
  handleUpdateSlot: (slot: Slot) => void;
  startAgain: () => void;
}

const Element = ({
  slot,
  handleUpdateSlot,
}: {
  slot: Slot;
  handleUpdateSlot: (slot: Slot) => void;
}) => {
  const [tempData, setTempData] = useState({ status: 'pending', transactionHash: '' });

  useEffect(() => {
    setTempData({ status: slot.status, transactionHash: slot.transactionHash });
  }, [slot]);

  return (
    <tr>
      <td>
        <h1 className="text-base text-white pr-10">Slot {slot.id + 1}</h1>
      </td>
      <td>
        <div className="text-base text-white">
          -----------------------------------------------------------------
        </div>
      </td>
      <td>
        <h1 className="text-bas gradient_text font-bold">{slot.range}</h1>
      </td>
      <td>
        <div className="py-3">
          {tempData.status === 'success' && (
            <div className="flex justify-center">
              <h1 className="text-base text-white">transaction successful</h1>
              <a
                className="gradient_text font-bold ml-4"
                href={`https://rinkeby.etherscan.io/tx/${tempData.transactionHash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Hash
              </a>
            </div>
          )}
          {tempData.status === 'pending' && (
            <DropButton
              {...slot}
              handleUpdateSlot={({ status, transactionHash }: any) => {
                handleUpdateSlot({ ...slot, status, transactionHash });
                setTempData({ status, transactionHash });
              }}
            />
          )}
        </div>
      </td>
    </tr>
  );
};

const StepFour = ({ slots, handleUpdateSlot, startAgain }: StepFourProps) => {
  const filter = slots.filter((slot: any) => slot.status === 'success');
  const isVisibleEmailButton = filter.length === slots.length;
  return (
    <div className="step-three">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl text-white">Transaction Slots ({slots.length})</h1>
      </div>
      <div className="mt-12 max-h-96 overflow-x-auto">
        <div className="flex justify-center items-center">
          <table className="table-auto w-4/5 py-5">
            <tbody>
              {slots.map((slot) => (
                <Element slot={slot} handleUpdateSlot={handleUpdateSlot} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button isLoading={false} onClick={startAgain}>
          Start Again
        </Button>
        {isVisibleEmailButton && (
          <>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Button isLoading={false} onClick={startAgain}>
              See full details on email.
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default StepFour;
