import React from 'react';
import { ScrollViewProps } from 'react-native';

import { Hotel } from '../../types';
import HotelCard from '../HotelCard';

import * as S from './styles';

interface IHotelCardListProps extends ScrollViewProps {
  hotelList: Hotel[];
}

const HotelCardList = ({ hotelList, ...rest }: IHotelCardListProps) => {
  return (
    <S.Container {...rest}>
      {hotelList.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </S.Container>
  );
};

export default HotelCardList;
