import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

// constants
import config from 'constants/config';

// utils
import XHR from 'utils/xhr';
import showNotification from 'utils/toast';

// redux
import types from './types';

function loginAPI(data) {
  const URL = `${config.baseURL}/auth`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

function* auth({ data }) {
  try {
    const res = yield call(loginAPI, data);

    if (res) {
      yield put(
        push({
          pathname: '/home',
        }),
      );
      localStorage.setItem('token', res.data.token);
    }
  } catch (e) {
    const { response } = e;
    response && showNotification(response.data.message, 'error');
  }
}

export default function* watcher() {
  yield takeLatest(types.auth, auth);
}
