import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

// constants
import config from 'constants/config';

// utils
import XHR from 'utils/xhr';
import showNotification from 'utils/toast';

// redux
import types from './types';

function verifyAPI() {
  const URL = `${config.baseURL}/start/pdfjpg`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'GET',
  };

  console.log(localStorage.getItem('token'));

  return XHR(URL, options);
}

function* verify() {
  try {
    const res = yield call(verifyAPI);

    if (res) {
      yield put(
        push({
          pathname: '/pdf-to-jpg',
        }),
      );
      localStorage.setItem('server', res.data.server);
      localStorage.setItem('task', res.data.task);
    }
  } catch (e) {
    const { response } = e;
    response && showNotification(response.data.message, 'error');
  }
}

export default function* watcher() {
  yield takeLatest(types.verify, verify);
}
