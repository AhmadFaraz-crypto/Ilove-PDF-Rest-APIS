import types from './types';

export const upload = data => ({
  type: types.upload,
  data,
});