import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faArrowLeft,
  faMapMarkerAlt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`;

export const BackgroundImage = styled.ImageBackground`
  height: ${RFPercentage(44)}px;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(40)}px;
  margin-horizontal: ${RFValue(24)}px;
`;

export const BookmarkIcon = styled(FontAwesomeIcon).attrs({
  icon: faBookmark,
  size: 24,
  color: '#FFF',
})`
  ${({ theme }) => css`
    box-shadow: 10px 10px 20px ${theme.colors.dark};
  `}
`;

export const BackIcon = styled(FontAwesomeIcon).attrs({
  icon: faArrowLeft,
  size: 24,
  color: '#FFF',
})`
  ${({ theme }) => css`
    box-shadow: 10px 10px 20px ${theme.colors.dark};
  `}
`;

export const LocationIconContainer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: 50px;
    height: ${RFValue(55)}px;
    width: ${RFValue(55)}px;
    margin-top: -${RFValue(30)}px;
    margin-bottom: ${RFValue(10)}px;
    margin-right: ${RFValue(40)}px;
    align-self: flex-end;
    box-shadow: 2px 2px 7px ${theme.colors.grey};
  `}
`;

export const LocationIcon = styled(FontAwesomeIcon).attrs({
  icon: faMapMarkerAlt,
  size: 24,
  color: '#FFF',
})``;

export const ContentContainer = styled.View`
  margin-horizontal: ${RFValue(24)}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.dark};
    font-weight: 700;
  `}
`;

export const LocationName = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.grey};
    margin-top: ${RFValue(4)}px;
    margin-bottom: ${RFValue(16)}px;
  `}
`;

export const RatingContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  margin-top: ${RFValue(16)}px;
`;

export const RatingText = styled.Text`
  font-weight: 600;
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(8)}px;
`;

export const RatingIcon = styled(FontAwesomeIcon).attrs({
  icon: faStar,
  size: 12,
})``;

export const Review = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${RFValue(11)}px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    margin-top: ${RFValue(24)}px;
    color: ${theme.colors.grey};
  `}
`;

export const PricingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFValue(32)}px;
`;

export const PricingTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 600;
  padding-left: ${RFValue(24)}px;
`;

export const PricingBackground = styled.View`
  ${({ theme }) => css`
    justify-content: center;
    align-items: center;
    background-color: rgba(82, 192, 180, 0.25);
    height: ${RFValue(40)}px;
    width: ${RFValue(200)}px;
    border-top-left-radius: ${theme.border.rounded}px;
    border-bottom-left-radius: ${theme.border.rounded}px;
  `}
`;

export const Pricing = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;
`;

export const PricingDetail = styled.Text`
  font-size: ${RFValue(12)}px;
`;

export const BookButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  ${({ theme }) => css`
    margin-top: ${RFValue(24)}px;
    margin-horizontal: ${RFValue(24)}px;
    border-radius: ${theme.border.rounded}px;
    background-color: ${theme.colors.primary};
  `}
`;

export const BookButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    align-self: center;
    padding-vertical: ${RFValue(16)}px;
    font-weight: 600;
    font-size: ${RFValue(14)}px;
  `}
`;
