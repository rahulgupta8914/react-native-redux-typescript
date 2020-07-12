import { LOGIN_CHECK, LOGIN } from './Types';
import { AppThunk } from 'src/redux/rootReducer';
import AsyncStorage from '@react-native-community/async-storage';

export const loginCheck = (): AppThunk => async (dispatch) => {
  try {
    const token = await AsyncStorage.getItem('token');
    const username = await AsyncStorage.getItem('userName');
    if (token) {
      dispatch({
        type: LOGIN_CHECK,
        payload: {
          loggedIn: true,
          isLoading: false,
          userName: username,
        },
      });
    } else {
      dispatch({
        type: LOGIN_CHECK,
        payload: {
          loggedIn: false,
          isLoading: false,
          userName: '',
        },
      });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_CHECK,
      payload: {
        loggedIn: false,
        userName: '',
        isLoading: false,
      },
    });
  }
};

export const logoutAction = (): AppThunk => async (dispatch) => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: LOGIN_CHECK,
      payload: {
        loggedIn: false,
        userName: '',
        isLoading: false,
      },
    });
  } catch (error) {}
};

export const loginAction = (
  email: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  password: string,
): AppThunk => async (dispatch) => {
  try {
    await AsyncStorage.multiSet([
      ['token', "I'm very well token"],
      ['userName', `${email.split('@')[0]}`],
    ]);
    dispatch({
      type: LOGIN,
      payload: {
        loggedIn: true,
        userName: email.split('@')[0],
        isLoading: false,
      },
    });
  } catch (error) {}
};
