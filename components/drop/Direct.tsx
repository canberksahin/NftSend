/* eslint-disable global-require */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */

import Dropzone from '../elements/Dropzone';
import TextArea from '../elements/TextArea';

let CodeMirror: any = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('react-codemirror');
  require('codemirror/mode/markdown/markdown');
}

interface StepTwoProps {
  dropInputValue: string;
  isManual: boolean;
  setIsManual: (value: boolean) => void;
  setDropInputValue: (value: string) => void;
  setCsvData: (value: any) => void;
}

const StepOne = ({
  dropInputValue,
  isManual,
  setIsManual,
  setDropInputValue,
  setCsvData,
}: StepTwoProps) => (
  <div className="px-12">
    <div className="flex-row flex justify-between">
      <h1 className="text-base text-white">4. Please provide recipients </h1>
      <a
        className="text-base text-white font-semibold cursor-pointer gradient_text"
        onClick={() => setIsManual(!isManual)}
      >
        {isManual ? 'import csv' : 'input manually'}
      </a>
    </div>
    {isManual ? (
      <div className="mt-2">
        <CodeMirror
          className="w-full p-2 text-white bg-black input_border_primary border-2 outline-0"
          value={dropInputValue}
          onChange={(value: string) => setDropInputValue(value)}
          options={{
            lineNumbers: true,
            readOnly: false,
            mode: 'markdown',
          }}
        />
      </div>
    ) : (
      <Dropzone onChange={(data) => setCsvData(data)} />
    )}

    {!isManual && (
      <a
        className="text-white py-2 text-sm cursor-pointer"
        href="/images/erc20.csv"
        target="_blank"
      >
        Show Example CSV
      </a>
    )}
    {isManual && <div className="text-white py-2 text-sm cursor-pointer">Show Example</div>}
  </div>
);

export default StepOne;
