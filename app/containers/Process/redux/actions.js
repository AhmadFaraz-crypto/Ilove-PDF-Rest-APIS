import types from './types';

export const process = data => ({
  type: types.process,
  data,
});

export const reset = () => ({
  type: types.reset,
});
