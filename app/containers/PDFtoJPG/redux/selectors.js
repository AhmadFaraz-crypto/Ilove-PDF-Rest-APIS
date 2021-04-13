import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUpload = state => state.upload || initialState;

const makeSelectRequesting = () =>
  createSelector(
    selectUpload,
    state => state.requesting,
  );

export { makeSelectRequesting };
