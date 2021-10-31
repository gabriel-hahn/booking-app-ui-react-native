import { StatusBar } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const currentStatusBarHeight = StatusBar.currentHeight || 0;

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`;

export const BackgroundImage = styled.ImageBackground`
  height: ${RFPercentage(50)}px;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding-horizontal: ${RFValue(20)}px;
  padding-top: ${currentStatusBarHeight + RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${RFValue(24)}px;
`;

export const BookmarkIcon = styled(FontAwesomeIcon).attrs({
  icon: faBookmark,
  size: 24,
  color: '#FFF',
})``;

export const BackIcon = styled(FontAwesomeIcon).attrs({
  icon: faArrowLeft,
  size: 24,
  color: '#FFF',
})``;
