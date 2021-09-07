import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  border-radius: ${({ theme }) => theme.border.radius}px;
  height: ${RFPercentage(35)}px;
  width: ${RFPercentage(30)}px;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-weight: 600;
  font-size: ${RFValue(14)}px;
`;

export const Location = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
`;

export const PriceContainer = styled.View``;

export const Price = styled.Text``;

export const DetailsContainer = styled.View`
  justify-content: center;
`;
