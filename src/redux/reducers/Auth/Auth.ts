import { ILoginActionTypes, LOGIN_CHECK, LOGIN, IAuth } from './Types';

const initialState: IAuth = {
  loggedIn: false,
  userName: '',
  isLoading: true,
};

export default function authReducer(
  state = initialState,
  action: ILoginActionTypes,
): IAuth {
  switch (action.type) {
    case LOGIN_CHECK:
    case LOGIN:
      return {
        loggedIn: action.payload.loggedIn,
        userName: action.payload.userName,
        isLoading: action.payload.isLoading,
      };
    default:
      return state;
  }
}
