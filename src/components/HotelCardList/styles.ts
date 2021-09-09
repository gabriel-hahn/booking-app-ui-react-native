import Animated from 'react-native-reanimated';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
  padding: ${RFValue(16)}px;
`;
