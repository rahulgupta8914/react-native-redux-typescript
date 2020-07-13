import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { baseTextStyle, customButton } from '../styles/index';
import useScale from '../hooks/useScale';

interface Props {
  onPress?: () => void;
  activeOpacity?: number;
  title: string;
  disabled?: boolean;
}

const CustomButton: React.FC<Props> = (props: Props) => {
  const { activeOpacity, onPress, title, disabled } = props;
  const { verticalScale } = useScale();
  return (
    <TouchableOpacity
      style={{
        ...customButton,
        height: verticalScale(50),
      }}
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}>
      <Text style={baseTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
CustomButton.defaultProps = {
  activeOpacity: 0.7,
};
export default CustomButton;
