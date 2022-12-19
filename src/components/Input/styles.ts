import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import { RFValue } from "react-native-responsive-fontsize";

type FormControlProps = {
    isInvalid?: boolean;
};

export const FormControl = styled.View`
  margin-bottom: 10px;
  width: 100%;
  min-height: 56px;
  max-height: 106px;
`;

export const FormInput = styled(TextInput) <FormControlProps>`
  flex: 1;
  min-height: 56px;
  max-height: 106px;

  ${({ theme, isInvalid }) => css`
    color: ${({ theme }) => theme.COLORS.GRAY1};
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid ${isInvalid ? theme.COLORS.RED : theme.COLORS.GRAY_100};

    font-size: ${RFValue(12)}px;
  `};

  border-radius: 6px;
  padding: 12px;
  margin-bottom: 4px;
`;

export const ErrorMessage = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-size: ${RFValue(12)}px;
  `};
`;
