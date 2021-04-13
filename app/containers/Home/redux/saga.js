import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

// constants
import config from 'constants/config';

// utils
import XHR from 'utils/xhr';
import showNotification from 'utils/toast';

// redux
import types from './types';

function pdfjpgAPI() {
  const URL = `${config.baseURL}/start/pdfjpg`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'GET',
  };
  return XHR(URL, options);
}

function imagepdfAPI() {
  const URL = `${config.baseURL}/start/imagepdf`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'GET',
  };

  return XHR(URL, options);
}

function htmlpdfAPI() {
  const URL = `${config.baseURL}/start/htmlpdf`;
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    method: 'GET',
  };

  return XHR(URL, options);
}

function* pdftojpgVerify() {
  try {
    const res = yield call(pdfjpgAPI);

    if (res) {
      yield put(
        push({
          pathname: '/upload-file',
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

function* imagepdfAPIVerify() {
  try {
    const res = yield call(imagepdfAPI);

    if (res) {
      yield put(
        push({
          pathname: '/upload-file',
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

function* htmlpdfAPIVerify() {
  try {
    const res = yield call(htmlpdfAPI);

    if (res) {
      yield put(
        push({
          pathname: '/upload-file',
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
  yield takeLatest(types.pdftojpg, pdftojpgVerify);
  yield takeLatest(types.imagetopdf, imagepdfAPIVerify);
  yield takeLatest(types.htmltopdf, htmlpdfAPIVerify);
}
