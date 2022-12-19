import { forwardRef, useImperativeHandle, useRef, useState, useEffect } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from "styled-components"

import { FormControl, FormInput, ErrorMessage } from './styles';

export type InputHandle = {
  getValue: () => string;
  onFocus: () => void;
};

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  errorMessage?: string | null;
};

export const Input = forwardRef<InputHandle, Props>(({ inputRef, errorMessage, ...rest }, ref) => {
  const [value, setValue] = useState('');
  const textInputRef = useRef<TextInput>(null);

  const { COLORS } = useTheme();

  const invalid = !!errorMessage;

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    onFocus: () => textInputRef.current?.focus(),
  }));

  return (

    <FormControl>

      <FormInput
        ref={inputRef}
        isInvalid={invalid}

        onChangeText={setValue}
        {...rest}
      />

      {invalid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FormControl>
  );
});
