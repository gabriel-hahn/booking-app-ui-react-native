import React from 'react';
import { useRoute } from '@react-navigation/core';

import { HotelDetailsScreenRouteProp } from '../../routes/types';

import * as S from './styles';

const HotelDetails = () => {
  const { params } = useRoute<HotelDetailsScreenRouteProp>();
  console.log('[HOTEL]: ', params.hotel);

  return <S.Container></S.Container>;
};

export default HotelDetails;
