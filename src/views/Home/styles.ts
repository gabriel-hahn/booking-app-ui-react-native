import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const currentStatusBarHeight = StatusBar.currentHeight || 0;

export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${RFValue(24)}px;
  padding-top: ${currentStatusBarHeight + RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CategoriesListContainer = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const HotelCardListContainer = styled.View`
  margin-vertical: ${RFValue(8)}px;
  margin-horizontal: ${RFValue(-20)}px;
`;

export const TopHotelListContainer = styled.View`
  margin-top: ${RFValue(8)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  margin-top: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 700;
`;

export const PlaceTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const TopHotelTitle = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 700;
  font-size: ${RFValue(14)}px;
`;

export const UserIcon = styled(FontAwesomeIcon).attrs({
  icon: faUser,
  size: 24,
  color: '#908e8c',
})`
  margin-top: ${RFValue(6)}px;
`;
