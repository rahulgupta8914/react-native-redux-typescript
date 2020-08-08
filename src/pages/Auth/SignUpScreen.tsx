import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  LayoutChangeEvent,
} from 'react-native';
import { clickAbleTextStyle, headingText } from '../../styles';
import { RootStackParamList } from '../../navigation/index';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { errorText } from '../../styles/index';
import { ScrollView } from 'react-native-gesture-handler';

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Sign Up'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const SignUpScreen: React.FC<Props> = (props) => {
  const [logoHeight, _logoHeight] = useState(67);
  const [formHeight, _formHeight] = useState(282);
  const [scollViewheight, _scollViewheight] = useState(400);
  const [values, setValues] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    confirmPassword: '',
    confirmPasswordError: '',
  });
  const handleChange = (value: string, type: any) => {
    let newObj = values;
    if (type === 'password') {
      newObj.password = value;
      if (value === '') {
        newObj.passwordError = 'Password is required';
      } else if (values.password?.length < 4) {
        newObj.passwordError = 'Password must be 4 or more characters';
      } else {
        newObj.passwordError = '';
      }
    } else if (type === 'email') {
      newObj.email = value;
      if (value === '') {
        newObj.emailError = 'email is required';
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        newObj.emailError = 'Email address is invalid';
      } else {
        newObj.emailError = '';
      }
    } else if (type === 'confirmPassword') {
      newObj.confirmPassword = value;
      if (value !== newObj.password) {
        newObj.confirmPasswordError = 'Invalid Match';
      } else {
        newObj.confirmPasswordError = '';
      }
    }
    setValues({
      ...newObj,
    });
  };
  return (
    <ScrollView
      onLayout={(e: LayoutChangeEvent) => {
        const { height } = e.nativeEvent.layout;
        _scollViewheight(height);
      }}>
      <View style={styles.contentWrapper}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          onLayout={(e: LayoutChangeEvent) => {
            const { height } = e.nativeEvent.layout;
            _logoHeight(height);
          }}>
          <Text style={headingText}>Sign Up</Text>
        </TouchableWithoutFeedback>
        <View style={{ height: scollViewheight - (logoHeight + formHeight) }} />
        <View
          style={styles.formWrapper}
          onLayout={(e: LayoutChangeEvent) => {
            const { height } = e.nativeEvent.layout;
            _formHeight(height);
          }}>
          {values.emailError !== '' && (
            <Text style={errorText}>{`${values.emailError}`}</Text>
          )}
          <CustomTextInput
            placeholder="Enter email"
            maxLength={25}
            value={values.email || ''}
            autoCompleteType="email"
            onChangeText={(text: string) => handleChange(text, 'email')}
          />

          {values.passwordError !== '' && (
            <Text style={errorText}>{`${values.passwordError}`}</Text>
          )}
          <CustomTextInput
            placeholder="Password"
            maxLength={100}
            autoCompleteType="password"
            secureTextEntry={true}
            value={values.password || ''}
            onChangeText={(text: string) => handleChange(text, 'password')}
          />
          {values.confirmPasswordError !== '' && (
            <Text style={errorText}>{`${values.confirmPasswordError}`}</Text>
          )}
          <CustomTextInput
            placeholder="Confirm Password"
            maxLength={100}
            autoCompleteType="password"
            secureTextEntry={true}
            value={values.confirmPassword || ''}
            onChangeText={(text: string) =>
              handleChange(text, 'confirmPassword')
            }
          />
          <CustomButton
            title="Sign Up"
            activeOpacity={0.7}
            disabled={
              values.emailError !== '' ||
              values.passwordError !== '' ||
              values.confirmPasswordError !== ''
                ? true
                : false
            }
          />
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={clickAbleTextStyle}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
  },
  formWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
});

export default SignUpScreen;
