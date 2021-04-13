import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

// utils
import XHR from 'utils/xhr';
import showNotification from 'utils/toast';

// redux
import types from './types';

function downloadAPI() {
  const URL = `https://${localStorage.getItem(
    'server',
  )}/v1/download/${localStorage.getItem('task')}`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'GET',
    responseType: "blob",
  };

  return XHR(URL, options);
}

function* download() {
  try {
    const res = yield call(downloadAPI);

    if (res) {
      const url = URL.createObjectURL(res.data);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Untited_file');
      document.body.appendChild(link);
      link.click();
      yield put(
        push({
          pathname: '/home',
        }),
      );
    }
  } catch (e) {
    const { response } = e;
    response && showNotification(response.data.message, 'error');
  }
}

export default function* watcher() {
  yield takeLatest(types.download, download);
}
