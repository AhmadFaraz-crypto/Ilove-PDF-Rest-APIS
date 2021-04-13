import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

// utils
import XHR from 'utils/xhr';
import showNotification from 'utils/toast';

// redux
import types from './types';
import { reset } from './actions';

function uploadAPI(data) {
  const URL = `https://${localStorage.getItem('server')}/v1/upload`;
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

function* upload({ data }) {
  try {
    const res = yield call(uploadAPI, data);

    if (res) {
      yield put(
        push({
          pathname: '/process',
        }),
      );
      localStorage.setItem('server_filename', res.data.server_filename);
    }
  } catch (e) {
    const { response } = e;
    response && showNotification(response.data.message, 'error');
  } finally {
    yield put(reset());
  }
}

export default function* watcher() {
  yield takeLatest(types.upload, upload);
}
