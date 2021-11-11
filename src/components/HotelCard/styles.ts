import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const AnimatedContainer = styled(Animated.View)`
  ${({ theme }) => css`
    box-shadow: 5px 5px 20px ${theme.colors.shadow};
  `}
`;

export const Container = styled.ImageBackground`
  ${({ theme }) => css`
    height: ${RFPercentage(40)}px;
    width: ${RFPercentage(30)}px;
    border-radius: ${theme.border.rounded}px;
    overflow: hidden;
    justify-content: space-between;
  `}
`;

export const Name = styled.Text`
  font-weight: 600;
  font-size: ${RFValue(14)}px;
`;

export const Location = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${RFValue(11)}px;
  margin-top: 2px;
`;

export const PriceContainer = styled.View`
  ${({ theme }) => css`
    height: ${RFPercentage(8)}px;
    width: ${RFPercentage(12)}px;
    background-color: ${theme.colors.primary};
    border-bottom-left-radius: ${theme.border.rounded}px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
  `}
`;

export const Price = styled.Text`
  font-size: ${RFValue(19)}px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`;

export const DetailsContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    height: ${RFPercentage(14)}px;
    border-top-left-radius: ${theme.border.rounded}px;
    border-top-right-radius: ${theme.border.rounded}px;
    width: 100%;
    padding: ${RFValue(16)}px;
    justify-content: space-between;
  `}
`;

export const DetailsContainerTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BookmarkIcon = styled(FontAwesomeIcon).attrs({
  icon: faBookmark,
  size: 20,
  color: '#52c0b4',
})``;
