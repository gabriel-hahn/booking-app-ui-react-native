import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin-top: ${RFValue(24)}px;
  margin-horizontal: ${RFValue(16)}px;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 700;
`;

export const PlaceTitle = styled.Text`
  color: ${({ theme }) => theme.primary};
`;

export const UserIcon = styled.Image`
  font-size: ${RFValue(24)}px;
`;
