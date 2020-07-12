import React, { useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
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
      <Text style={styles.text}>Splash Screen</Text>
      <ActivityIndicator color="#8a2be2" size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#8a2be2',
    fontSize: 30,
    letterSpacing: 8,
    fontWeight: 'bold',
    paddingBottom: 35,
  },
});

export default SplashScreen;
