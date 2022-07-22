import { forEach, split, trim } from 'lodash';

export const splitERC20Token = (value: string) => {
  const address: any = [];
  const amount: any = [];
  const arrayOfLines = value.match(/[^\r\n]+/g);
  forEach(arrayOfLines, (item) => {
    const splitData = split(item, ',');
    address.push(trim(splitData[0]));
    amount.push(trim(splitData[1]));
  });
  return { address, amount };
};

export const splitERC721Token = (value: string) => {
  const address: any = [];
  const tokenId: any = [];
  const arrayOfLines = value.match(/[^\r\n]+/g);
  forEach(arrayOfLines, (item) => {
    const splitData = split(item, ',');
    address.push(trim(splitData[0]));
    tokenId.push(trim(splitData[1]));
  });
  return { address, tokenId };
};

export const splitERC1125Token = (value: string) => {
  const address: any = [];
  const tokenId: any = [];
  const amount: any = [];
  const arrayOfLines = value.match(/[^\r\n]+/g);
  forEach(arrayOfLines, (item) => {
    const splitData = split(item, ',');
    address.push(trim(splitData[0]));
    tokenId.push(trim(splitData[1]));
    amount.push(trim(splitData[2]));
  });
  return { address, tokenId, amount };
};
