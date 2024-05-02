import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import crypto from 'crypto';
import { NFTEntity } from 'libs/nftEntity';

const client = new DynamoDBClient({ region: 'eu-west-1' });

const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const main = async (): Promise<any> => {
  const id = crypto.randomUUID();

  const positionX = randomIntFromInterval(5, 90);
  const positionY = randomIntFromInterval(10, 90);
  const imageIndex = Math.floor(Math.random() * 5);

  await NFTEntity.put({
    PK: 'Nft',
    id,
    positionX: positionX,
    positionY: positionY,
    imageIndex: imageIndex,
  });

  return {
    id,
    positionX,
    positionY,
    imageIndex,
  };
};
