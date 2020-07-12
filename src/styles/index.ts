import { ViewStyle, TextStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const center: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const baseTextStyle: TextStyle | ViewStyle = {
  color: Colors.black,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 'bold',
  letterSpacing: 2,
};

export const headingText = { fontSize: 50, paddingLeft: 10 };
export const clickAbleTextStyle = { ...baseTextStyle, marginBottom: 20 };

export const errorText = {
  color: 'red',
  fontSize: 12,
  marginLeft: 'auto',
};

export const customTextInputStyle: TextStyle | ViewStyle = {
  width: '100%',
  height: 50,
  backgroundColor: Colors.azure,
  borderRadius: 5,
  marginBottom: 20,
  borderColor: '#8a2be2',
  borderWidth: 3,
  paddingLeft: 9,
  ...baseTextStyle,
};

export const customButton: ViewStyle = {
  width: '100%',
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  borderRadius: 5,
  backgroundColor: Colors.azure,
  borderColor: '#8a2be2',
  borderWidth: 3,
  marginBottom: 20,
};
