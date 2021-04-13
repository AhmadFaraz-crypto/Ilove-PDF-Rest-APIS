import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectupload = state => state.upload || initialState;


const makeSelectRequesting = () =>
  createSelector(
    selectupload,
    state => state.requesting,
  );

export { makeSelectRequesting };
