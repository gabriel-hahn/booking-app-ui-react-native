import Animated from 'react-native-reanimated';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const AnimatedContainer = styled(Animated.View)`
  ${({ theme }) => css`
    box-shadow: 12px 12px 15px ${theme.colors.grey};
  `}
`;

export const Container = styled.ImageBackground`
  ${({ theme }) => css`
    position: relative;
    height: ${RFPercentage(40)}px;
    width: ${RFPercentage(30)}px;
    border-radius: ${theme.border.rounded}px;
    overflow: hidden;
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
    position: absolute;
    top: 0;
    right: 0;
    height: ${RFPercentage(8)}px;
    width: ${RFPercentage(12)}px;
    background-color: ${theme.colors.primary};
    border-bottom-left-radius: ${theme.border.rounded}px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Price = styled.Text`
  font-size: ${RFValue(19)}px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`;

export const DetailsContainer = styled.View`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${theme.colors.white};
    height: ${RFPercentage(12)}px;
    border-top-left-radius: ${theme.border.rounded}px;
    border-top-right-radius: ${theme.border.rounded}px;
    width: 100%;
    padding: ${RFValue(16)}px;
  `}
`;
