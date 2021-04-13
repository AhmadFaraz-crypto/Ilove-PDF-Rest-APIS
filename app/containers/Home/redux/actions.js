import types from './types';

export const pdftojpg = () => ({
  type: types.pdftojpg,
});

export const imagetopdf = () => ({
  type: types.imagetopdf,
});

export const htmltopdf = () => ({
  type: types.htmltopdf,
});

export const updateFunctionType = (funType) => ({
  type: types.updateFunctionType,
  funType
});

export const reset = () => ({
  type: types.reset,
});
