/* eslint-disable react/require-default-props */
import { ReactNode, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWeb3React } from '@web3-react/core';

import { toast } from 'react-hot-toast';
import Header from './Header';
import {
  useEagerConnect,
  useInactiveListener,
  getErrorMessage,
  injected,
} from '../../utils/connections';
import Footer from './Footer';
import WalletLoginModal from './WalletLoginModal';
import AccountInfoModal from './AccountInfoModal';

function Layout({ isDrop = false, children }: { isDrop?: boolean; children: ReactNode }) {
  const [chooseWalletPopupOpen, setChooseWalletPopupOpen] = useState(false);
  const [accountInfoPopupOpen, setAccountInfoPopupOpen] = useState(false);

  const { account, active, activate, error, deactivate } =
    useWeb3React<ethers.providers.Web3Provider>();

  const triedEager = useEagerConnect();
  useInactiveListener(!triedEager);

  useEffect(() => {
    if (error) {
      toast.error(getErrorMessage(error));
    }
  }, [error]);

  return (
    <div
      className="relative"
      style={isDrop ? { backgroundImage: `url('/images/dropBackground.png)` } : {}}
    >
      <Header
        account={account}
        active={active}
        open={() => setChooseWalletPopupOpen(true)}
        connect={() => activate(injected)}
        logOut={() => deactivate()}
      />
      {accountInfoPopupOpen && <AccountInfoModal close={() => setAccountInfoPopupOpen(false)} />}
      {chooseWalletPopupOpen && (
        <WalletLoginModal
          close={() => setChooseWalletPopupOpen(false)}
          connect={() => activate(injected)}
        />
      )}
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
