import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { clickAbleTextStyle, headingText } from '../../styles';
import { RootStackParamList } from '../../navigation/index';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { errorText } from '../../styles/index';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/reducers/Auth/action';

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Sign Up'
>;

type Props = {
  navigation: SignInScreenNavigationProp;
};

const SignInScreen: React.FC<Props> = (props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  });

  const dispatch = useDispatch();

  const handleChange = (value: string, type: string) => {
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
    }
    setValues({
      ...newObj,
    });
  };

  const onSubmit = () => {
    const { email, password, emailError, passwordError } = values;
    if (email && password && emailError === '' && passwordError === '') {
      if (password === 'admin1234') {
        dispatch(loginAction(email, password));
      } else {
        Alert.alert('', 'Wrong Password');
      }
    } else if (email === '' || emailError) {
      handleChange(values.email, 'email');
    } else if (password === '' || passwordError) {
      handleChange(values.password, 'password');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.contentWrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.handleSpace}>
          <Text style={headingText}>Sign In</Text>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.formWrapper}>
        {values.emailError !== '' && (
          <Text style={errorText}>{`${values.emailError}`}</Text>
        )}
        <CustomTextInput
          placeholder="Enter email"
          maxLength={50}
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
        <CustomButton
          title="Sign In"
          activeOpacity={0.7}
          disabled={
            values.emailError !== '' || values.passwordError !== ''
              ? true
              : false
          }
          onPress={onSubmit}
        />
        <TouchableOpacity onPress={() => props.navigation.push('Sign Up')}>
          <Text style={clickAbleTextStyle}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: '3%',
    paddingRight: '3%',
  },
  handleSpace: { flex: 1, alignSelf: 'stretch', flexGrow: 2 },
});

export default SignInScreen;
