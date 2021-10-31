import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  HotelDetailsScreeNavigationProp,
  HotelDetailsScreenRouteProp,
} from '../../routes/types';

import * as S from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HotelDetails = () => {
  const {
    params: { hotel },
  } = useRoute<HotelDetailsScreenRouteProp>();

  const navigate = useNavigation<HotelDetailsScreeNavigationProp>();

  const handleNavigateBack = () => {
    navigate.goBack();
  };

  return (
    <S.Container>
      <S.BackgroundImage source={hotel.image} resizeMode="cover">
        <S.Header>
          <TouchableOpacity activeOpacity={0.9} onPress={handleNavigateBack}>
            <S.BackIcon />
          </TouchableOpacity>
          <S.BookmarkIcon />
        </S.Header>
      </S.BackgroundImage>

      <S.LocationIconContainer>
        <S.LocationIcon />
      </S.LocationIconContainer>

      <S.ContentContainer></S.ContentContainer>
    </S.Container>
  );
};

export default HotelDetails;
