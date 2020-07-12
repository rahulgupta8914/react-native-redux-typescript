import React from 'react';
import { TextInput, TextInputProps, TextStyle } from 'react-native';
import { customTextInputStyle } from '../styles/index';
import useScale from '../hooks/useScale';

interface Props extends TextInputProps {}

const CustomTextInput: React.FC<Props> = (props: Props) => {
  const { verticalScale } = useScale();
  return (
    <TextInput
      {...props}
      style={{
        ...customTextInputStyle,
        height: verticalScale(50),
        ...(props.style as TextStyle),
      }}
      autoCapitalize="none"
    />
  );
};
export default CustomTextInput;
