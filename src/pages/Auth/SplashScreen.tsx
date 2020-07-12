import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { center } from '../../styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/index';
import { useDispatch } from 'react-redux';
import { loginCheck } from '../../redux/reducers/Auth/action';

type SplashScreenScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

interface Props {
  navigation: SplashScreenScreenNavigationProp;
}

const SplashScreen: React.FC<Props> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(loginCheck());
    }, 1000);
    return () => {
      // cleanup
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={center}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
