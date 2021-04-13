import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectfuncRequesting = () =>
  createSelector(
    selectHome,
    state => state.funtionType,
  );

export { makeSelectfuncRequesting };
