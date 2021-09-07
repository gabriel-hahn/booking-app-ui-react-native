import React from 'react';

import { Hotel } from '../../types';
import * as S from './styles';

interface IHotelCardProps {
  hotel: Hotel;
}

const HotelCard = ({ hotel }: IHotelCardProps) => (
  <S.Container source={hotel.image} resizeMode="cover">
    <S.PriceContainer>
      <S.Price>$ {hotel.price}</S.Price>
    </S.PriceContainer>

    <S.DetailsContainer>
      <S.Name>{hotel.name}</S.Name>
      <S.Location>{hotel.location}</S.Location>
    </S.DetailsContainer>
  </S.Container>
);

export default HotelCard;
