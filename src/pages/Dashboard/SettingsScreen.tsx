import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/reducers/Auth/action';
import { RootState } from '../../redux/rootReducer';
import { useSelector } from 'react-redux';

type Props = {};
const SettingsScreen: React.FC<Props> = () => {
  const reduxState = (state: RootState) => state.auth;
  const state = useSelector(reduxState);
  const { userName } = state;
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
  };
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.header}>
        <Text style={styles.mainHead}>Welcome, {`${userName}`}</Text>
        <Text style={styles.subHead}>Settings</Text>
      </View>
      <TouchableOpacity style={styles.logout}>
        <CustomButton title="Logout" onPress={logout} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logout: { flex: 1, justifyContent: 'flex-end' },
  header: { paddingBottom: 15 },
  mainHead: { fontSize: 30 },
  subHead: { fontSize: 18 },
  contentWrapper: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default SettingsScreen;
