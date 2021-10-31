import React from 'react';
import { useRoute } from '@react-navigation/core';

import { HotelDetailsScreenRouteProp } from '../../routes/types';

import * as S from './styles';

const HotelDetails = () => {
  const {
    params: { hotel },
  } = useRoute<HotelDetailsScreenRouteProp>();

  return (
    <S.Container>
      <S.BackgroundImage source={hotel.image} resizeMode="cover">
        <S.Header>
          <S.BackIcon />
          <S.BookmarkIcon />
        </S.Header>
      </S.BackgroundImage>
      <S.ContentContainer></S.ContentContainer>
    </S.Container>
  );
};

export default HotelDetails;
