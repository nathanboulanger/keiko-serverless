import { NFTEntity } from 'libs/nftEntity';

export const main = async (): Promise<any> => {
  const primaryKey = 'Nft';

  const Items = (await NFTEntity.query(primaryKey)).Items;

  return Items;
};
