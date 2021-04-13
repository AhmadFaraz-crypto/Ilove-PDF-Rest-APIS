import types from './types';

export const auth = data => ({
  type: types.auth,
  data,
});
