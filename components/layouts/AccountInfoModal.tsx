/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

const AccountInfoModal = ({ close }: any) => (
  <div className="flex items-center justify-center absolute w-screen h-screen bg-blur overflow-clip z-50 top-0 overflow-x-hidden">
    <div className="popup_gradient border-4 border-cyan-300 w-1/2 py-12 relative">
      <h1 className="title-font font-medium text-2xl md:text-3xl text-white text-center mb-12">
        Account
      </h1>
      <img
        className="w-10 h-10 mr-2 absolute top-10 right-8 cursor-pointer"
        src="/images/cross_btn.png"
        alt="crypto_icon"
        onClick={close}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center items-center justify-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="leading-relaxed text-white ">Balance</h2>
              <p className="title-font font-medium sm:text-3xl text-2xl text-white">0.1213 ETH</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="leading-relaxed text-white ">Network</h2>
              <p className="title-font font-medium sm:text-3xl text-2xl text-white">Mainnet</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="leading-relaxed text-white ">Wallet</h2>
              <p className="title-font font-medium sm:text-3xl text-2xl text-white">Metamask</p>
            </div>
          </div>
        </div>
        <div className="w-full px-16">
          <button
            type="button"
            className="flex w-full items-center justify-between btn_border_secondary hover_btn border-2 px-4 py-3 mr-5 mb-4 text-white"
          >
            <div>0x6754fb3576e87dc3b0a853be9db57e31068833d4</div>
            <img
              className="w-6 h-6 mr-2 cursor-pointer"
              src="/images/copy_icon.png"
              alt="crypto_icon"
            />
          </button>
        </div>
        <div className="flex items-center gradient_text text-2xl mt-4 cursor-pointer">
          <img
            className="w-6 h-6 mr-2 cursor-pointer"
            src="/images/logout_icon.png"
            alt="crypto_icon"
          />
          Disconnect
        </div>
      </div>
    </div>
  </div>
);

export default AccountInfoModal;
