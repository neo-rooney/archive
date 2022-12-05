import { combineReducers } from 'redux';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSage } from './user';
import { all } from 'redux-saga/effects';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
});

export function* rootSaga() {
  yield all([authSaga(), userSage(), writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;
