import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAuth = state => state.auth || initialState;

const makeSelectRequesting = () =>
  createSelector(
    selectAuth,
    state => state.requesting,
  );

export { makeSelectRequesting };
