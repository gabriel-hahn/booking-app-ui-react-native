import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Container = styled.View`
  margin-top: ${RFValue(16)}px;
  margin-horizontal: ${RFValue(20)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: 700;
`;

export const PlaceTitle = styled.Text`
  color: ${({ theme }) => theme.primary};
`;

export const UserIcon = styled(FontAwesomeIcon).attrs({
  icon: faUser,
  size: 24,
})`
  margin-top: ${RFValue(6)}px;
`;
