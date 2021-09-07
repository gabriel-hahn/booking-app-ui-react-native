import { ImageSourcePropType } from 'react-native';

export type Category = {
  key: string;
  description: string;
};

export type Hotel = {
  id: string;
  name: string;
  location: string;
  price: number;
  image: ImageSourcePropType;
  details: string;
};
