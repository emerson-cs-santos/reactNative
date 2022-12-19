import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

export const ButtonContainer = styled(TouchableOpacity)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${RFValue(15)}px;
    background-color: ${ ( { theme } ) => theme.COLORS.GRAY4 };
    color: ${ ( { theme } ) => theme.COLORS.RED };
  `}
`;
