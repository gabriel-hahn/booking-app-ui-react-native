import React from 'react';
import { useTheme } from 'styled-components';

import hotelMocks from '../../mocks/hotels';

import * as S from './styles';

const TopHotelList = () => {
  const theme = useTheme();

  return (
    <S.Container
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}>
      {hotelMocks.map(hotel => (
        <S.CardContainer key={hotel.id} source={hotel.image} resizeMode="cover">
          <S.Rating>
            <S.RatingIcon color={theme.colors.orange} />
            <S.RatingNumber>{hotel.rating}</S.RatingNumber>
          </S.Rating>
          <S.DetailsSection>
            <S.Title>{hotel.name}</S.Title>
            <S.Location>{hotel.location}</S.Location>
          </S.DetailsSection>
        </S.CardContainer>
      ))}
    </S.Container>
  );
};

export default TopHotelList;
