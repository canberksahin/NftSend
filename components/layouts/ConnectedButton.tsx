import { minifyAddress } from '../../utils/helpers';

const ConnectedButton = ({ balance, account, currentNetwork, logOut }: any) => (
  <div className="flex">
    <button
      type="button"
      className="flex items-center justify-center btn_border_secondary hover_btn border-2 px-4 py-2 mr-5 text-white"
    >
      <img className="w-5 h-5 mr-2" src={currentNetwork?.logo} alt="crypto_icon" />
      {currentNetwork?.name}
    </button>
    <div className="flex btn_border_primary hover_btn border-2  text-white">
      <div className="flex items-center justify-center btn_bg_primary px-4 py-2 text-black">
        {parseFloat(balance).toFixed(4)} {currentNetwork?.symbol}{' '}
      </div>
      <div className="flex items-center justify-center text-white px-4 py-2">
        {minifyAddress(account, 6)}
      </div>
    </div>
    <button
      type="button"
      className="text-red-500 ml-3 special_btn px-3 h-12 font-semibold"
      onClick={logOut}
    >
      Logout
    </button>
  </div>
);

export default ConnectedButton;
