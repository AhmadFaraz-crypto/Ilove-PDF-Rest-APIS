import produce from 'immer';

import types from './types';

export const initialState = {
  requesting: false,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.download:
        draft.requesting = true;
        break;
    }
  });
