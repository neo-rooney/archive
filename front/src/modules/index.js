import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSage } from './user';
import { all } from 'redux-saga/effects';
import write from './write';
const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
});

export function* rootSaga() {
  yield all([authSaga(), userSage()]);
}

export default rootReducer;
