import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

const initialStore = {};
const middleware = [thunk];
export default createStore(
  rootReducer,
  initialStore,
  compose(applyMiddleware(...middleware)),
);
