import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider as Web3Provider } from '@ethersproject/providers';
import { Toaster } from 'react-hot-toast';

import '../styles/global.css';
import apollo from '../utils/apolloClient';

function getLibrary(provider: any): Web3Provider {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apollo}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
        <Toaster position="top-left" reverseOrder={false} />
      </Web3ReactProvider>
    </ApolloProvider>
  );
}

export default MyApp;
