import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
interface ICategoryOptionProps {
  isSelected: boolean;
}

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CategoryDescription = styled.Text<ICategoryOptionProps>`
  ${({ theme, isSelected }) => css`
    font-weight: 700;
    font-size: ${RFValue(14)}px;
    color: ${theme.colors.grey};

    ${!!isSelected &&
    css`
      color: ${theme.colors.primary};
    `}
  `}
`;

export const CategorySelectionMark = styled(Animated.View)`
  ${({ theme }) => css`
    margin-top: ${RFValue(2)}px;
    height: 3px;
    background-color: ${theme.colors.primary};
  `}
`;

export const CategoryOption = styled(RectButton).attrs({
  activeOpacity: 0.02,
})`
  margin-right: ${RFValue(16)}px;
`;
