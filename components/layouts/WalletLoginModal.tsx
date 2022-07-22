/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

const wallets = [
  { id: 0, name: 'Metamask', logo: '/images/metamask_icon.png' },
  { id: 1, name: 'Wallet Connect', logo: '/images/wallet_connect_icon.png' },
];

const WalletLoginModal = ({ close, connect }: any) => (
  <div className="flex items-center justify-center absolute w-screen h-screen bg-blur overflow-clip z-50 top-0">
    <div className="popup_gradient border-4 border-cyan-300 w-1/2 py-12 relative">
      <h1 className="title-font font-medium text-2xl md:text-3xl text-white text-center mb-12">
        Wallet Login
      </h1>
      <img
        className="w-10 h-10 mr-2 absolute top-10 right-8 cursor-pointer"
        src="/images/cross_btn.png"
        alt="crypto_icon"
        onClick={close}
      />
      <div className="flex flex-col items-center justify-center">
        {wallets.map((wallet) => (
          <button
            type="button"
            className="flex w-1/3 items-center justify-between btn_border_secondary hover_btn border-2 px-4 py-3 mr-5 mb-4 text-white"
            key={wallet.id}
            onClick={() => {
              if (wallet.id === 0) {
                connect();
                close();
              }
            }}
          >
            {wallet.name}
            <img className="w-5 h-5 mr-2" src={wallet.logo} alt="crypto_icon" />
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default WalletLoginModal;
