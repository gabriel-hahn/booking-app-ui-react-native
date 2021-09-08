import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Hotel } from '../../types';
import * as S from './styles';

interface IHotelCardProps {
  hotel: Hotel;
  itemIndex: number;
  scrollX: Animated.SharedValue<number>;
}

const CARD_WIDTH_OFFSET = RFPercentage(30);

const HotelCard = ({ hotel, itemIndex, scrollX }: IHotelCardProps) => {
  const inputRange = [
    (itemIndex - 1) * CARD_WIDTH_OFFSET,
    itemIndex * CARD_WIDTH_OFFSET,
    (itemIndex + 1) * CARD_WIDTH_OFFSET,
  ];

  const cardStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollX.value, inputRange, [0.5, 1, 0.5]),
      transform: [
        {
          scale: interpolate(scrollX.value, inputRange, [0.8, 1, 0.8]),
        },
      ],
    };
  });

  return (
    <S.AnimatedContainer style={cardStyle}>
      <S.Container source={hotel.image} resizeMode="cover">
        <S.PriceContainer>
          <S.Price>$ {hotel.price}</S.Price>
        </S.PriceContainer>

        <S.DetailsContainer>
          <S.Name>{hotel.name}</S.Name>
          <S.Location>{hotel.location}</S.Location>
        </S.DetailsContainer>
      </S.Container>
    </S.AnimatedContainer>
  );
};

export default HotelCard;
