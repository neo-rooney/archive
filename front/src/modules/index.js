import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSage } from './user';
import { all } from 'redux-saga/effects';
const rootReducer = combineReducers({
  auth,
  loading,
  user,
});

export function* rootSaga() {
  yield all([authSaga(), userSage()]);
}

export default rootReducer;
