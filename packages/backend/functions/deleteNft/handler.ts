import { NFTEntity } from 'libs/nftEntity';

export const main = async (event: {
  pathParameters: { id: string };
}): Promise<string> => {
  await NFTEntity.delete({ id: event.pathParameters.id });

  return event.pathParameters.id;
};
