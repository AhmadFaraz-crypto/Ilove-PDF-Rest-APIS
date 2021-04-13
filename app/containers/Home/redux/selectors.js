import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.verify || initialState;

const makeSelectRequesting = () =>
  createSelector(
    selectHome,
    state => state.requesting,
  );

export { makeSelectRequesting };
