import { ethers } from 'ethers';
import { simpleRpcProvider } from './providers';
import multiSend from './abi/multiSend.json';
import erc721Abi from './abi/erc721.json';
import erc1155Abi from './abi/erc1155.json';
import erc20Abi from './abi/erc20.json';

const getContract = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getMultiSendContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => getContract(multiSend, address, signer);

export const getERC721Contract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => getContract(erc721Abi, address, signer);

export const getERC1155Contract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => getContract(erc1155Abi, address, signer);

export const getERC20AbiContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider,
) => getContract(erc20Abi, address, signer);

export const getERC721OwnersOfToken = async (tokens: string[], contract: any) => {
  const promise = tokens.map(
    (item: string) =>
      new Promise((resolve, reject) => {
        contract
          .ownerOf(item)
          .then((owner: string) => {
            resolve({ tokenId: item, owner });
          })
          .catch((err: Error) => {
            reject(err);
          });
      }),
  );
  const results = await Promise.all(promise);
  return results;
};

export const getERC1155OwnersOfToken = async (tokens: string[], contract: any, account: string) => {
  const promise = tokens.map(
    (item: string) =>
      new Promise((resolve, reject) => {
        contract
          .balanceOf(account, item)
          .then((balance: string) => {
            resolve({ tokenId: item, balance: balance.toString() });
          })
          .catch((err: Error) => {
            reject(err);
          });
      }),
  );
  const results = await Promise.all(promise);
  return results;
};
