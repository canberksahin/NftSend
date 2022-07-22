interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: string;
}

export interface NetworkParamsI {
  chainId: string;
  chainName: string;
  nativeCurrency: NativeCurrency;
  rpcUrls: string;
  blockExplorerUrls: string;
}
