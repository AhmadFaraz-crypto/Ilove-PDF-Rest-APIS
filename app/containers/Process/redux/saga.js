import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

// utils
import XHR from 'utils/xhr';
import showNotification from 'utils/toast';

// redux
import types from './types';

function processAPI(data) {
  const URL = `https://${localStorage.getItem('server')}/v1/process`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'POST',
    data,
  };

  return XHR(URL, options);
}

function* process({ data }) {
  try {
    const res = yield call(processAPI, data);

    if (res) {
      yield put(
        push({
          pathname: '/download',
        }),
      );
    }
  } catch (e) {
    const { response } = e;
    response && showNotification(response.data.message, 'error');
  }
}

export default function* watcher() {
  yield takeLatest(types.process, process);
}
