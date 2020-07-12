import { combineReducers, Action } from 'redux';
import authReducer from './reducers/Auth/Auth';
import { ThunkAction } from 'redux-thunk';
// import authReducer from '../pages/SignIn/redux/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
