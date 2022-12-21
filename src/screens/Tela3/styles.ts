import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLUE3};
  padding: 24px;
`;

export const ViewButton = styled.View`
  margin-top: ${RFValue(12)}px;
`;

