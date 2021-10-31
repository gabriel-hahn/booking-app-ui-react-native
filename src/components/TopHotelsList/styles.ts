import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const Container = styled.ScrollView`
  margin-top: ${RFValue(10)}px;
  width: 100%;
  height: 100%;
  ${({ theme }) => css`
    box-shadow: 5px 5px 20px ${theme.colors.shadow};
  `}
`;

export const CardContainer = styled.ImageBackground`
  ${({ theme }) => css`
    justify-content: space-between;
    margin-right: ${RFValue(20)}px;
    height: ${RFPercentage(20)}px;
    width: ${RFPercentage(16)}px;
    border-radius: ${theme.border.rounded}px;
    overflow: hidden;
  `}
`;

export const Rating = styled.View`
  ${({ theme }) => css`
    width: 57%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    align-self: flex-end;
    padding: ${RFValue(8)}px;
    border-bottom-left-radius: ${theme.border.rounded}px;
    background-color: rgba(0, 0, 0, 0.3);
  `}
`;

export const RatingIcon = styled(FontAwesomeIcon).attrs({
  icon: faStar,
  size: 12,
})``;

export const RatingNumber = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(18)}px;
    color: ${theme.colors.white};
    font-weight: 700;
    margin-left: ${RFValue(6)}px;
  `}
`;

export const DetailsSection = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 0 ${RFValue(8)}px;
    height: ${RFPercentage(7)}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.dark};
    font-size: ${RFValue(10)}px;
    margin-top: ${RFValue(8)}px;
    margin-bottom: ${RFValue(2)}px;
    font-weight: 700;
  `}
`;

export const Location = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    font-size: ${RFValue(10)}px;
  `}
`;
