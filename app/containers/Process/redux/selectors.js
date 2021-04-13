import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProcess = state => state.process || initialState;


const makeSelectRequesting = () =>
  createSelector(
    selectProcess,
    state => state.requesting,
  );

export { makeSelectRequesting };