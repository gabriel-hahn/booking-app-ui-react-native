import React, { useMemo } from 'react';
import { View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Hotel } from '../../types';
import * as S from './styles';

interface IHotelCardProps {
  hotel: Hotel;
  itemIndex: number;
  scrollX: Animated.SharedValue<number>;
}

const CARD_WIDTH_OFFSET = RFPercentage(32);

const HotelCard = ({ hotel, itemIndex, scrollX }: IHotelCardProps) => {
  const theme = useTheme();

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

  const ratingFormatted = useMemo(
    () => Array(5).fill(false).fill(true, 0, hotel.rating),
    [hotel.rating],
  );

  return (
    <S.AnimatedContainer style={cardStyle}>
      <S.Container source={hotel.image} resizeMode="cover">
        <S.PriceContainer>
          <S.Price>$ {hotel.price}</S.Price>
        </S.PriceContainer>

        <S.DetailsContainer>
          <S.DetailsContainerTitle>
            <View>
              <S.Name>{hotel.name}</S.Name>
              <S.Location>{hotel.location}</S.Location>
            </View>
            <S.BookmarkIcon />
          </S.DetailsContainerTitle>
          <S.ClientReviewsContainer>
            <S.RatingContainer>
              {ratingFormatted.map((ratingValue, ratingIndex) => (
                <S.RatingIcon
                  key={ratingIndex}
                  color={ratingValue ? theme.colors.orange : theme.colors.light}
                />
              ))}
              <S.RatingText>{hotel.rating}</S.RatingText>
            </S.RatingContainer>
            <S.Review>{hotel.reviews} reviews</S.Review>
          </S.ClientReviewsContainer>
        </S.DetailsContainer>
      </S.Container>
    </S.AnimatedContainer>
  );
};

export default HotelCard;
