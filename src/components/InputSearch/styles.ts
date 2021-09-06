import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.border.radius}px;
`;

export const MagnifierIcon = styled(FontAwesomeIcon).attrs({
  icon: faSearch,
  size: 16,
  color: '#908e8c',
})`
  margin: ${RFValue(8)}px ${RFValue(12)}px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: ${RFValue(32)}px;
`;
