import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDownload = state => state.download || initialState;

const makeSelectRequesting = () =>
  createSelector(
    selectDownload,
    state => state.requesting,
  );

export { makeSelectRequesting };
