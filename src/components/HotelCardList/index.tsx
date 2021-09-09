import React from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollViewProps,
} from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';

import { Hotel } from '../../types';
import HotelCard from '../HotelCard';

import * as S from './styles';

const CARD_WIDTH_OFFSET = RFPercentage(32);
interface IHotelCardListProps extends ScrollViewProps {
  hotelList: Hotel[];
}

const HotelCardList = ({ hotelList, ...rest }: IHotelCardListProps) => {
  const scrollX = useSharedValue(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  return (
    <S.Container
      scrollEventThrottle={16}
      snapToInterval={CARD_WIDTH_OFFSET}
      disableScrollViewPanResponder={false}
      disableIntervalMomentum
      onScroll={handleScroll}
      {...rest}>
      {hotelList.map((hotel, itemIndex) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
          itemIndex={itemIndex}
          scrollX={scrollX}
        />
      ))}
    </S.Container>
  );
};

export default HotelCardList;
