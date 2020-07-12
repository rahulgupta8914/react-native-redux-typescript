export const LOGIN_CHECK = 'LOGIN_CHECK';
export const LOGIN = 'LOGIN';

export interface IAuth {
  loggedIn: boolean;
  userName: string;
  isLoading: boolean;
}

interface ILoginCheckAction {
  type: typeof LOGIN_CHECK;
  payload: IAuth;
}

interface ILoginAction {
  type: typeof LOGIN;
  payload: IAuth;
}

export type ILoginActionTypes = ILoginCheckAction | ILoginAction;
