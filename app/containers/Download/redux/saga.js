import { call, put, takeLatest } from 'redux-saga/effects';

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
  };

  return XHR(URL, options);
}

function* download() {
  try {
    const res = yield call(downloadAPI);

    if (res) {
      localStorage.setItem('image', res.data);
      // console.log('res', res);
      // const url = window.URL.createObjectURL(new Blob([res.data]));
      // console.log('url', url);
      // const link = document.createElement('a');
      // link.href = url;
      // link.setAttribute('download', 'test.png');
      // document.body.appendChild(link);
      // link.click();
    }
  } catch (e) {
    const { response } = e;
    response && showNotification(response.data.message, 'error');
  }
}

export default function* watcher() {
  yield takeLatest(types.download, download);
}
