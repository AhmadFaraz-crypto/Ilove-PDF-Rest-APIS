import produce from 'immer';

import types from './types';

export const initialState = {
  requesting: false,
  funtionType: false
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.pdftojpg:
        draft.requesting = true;
        break;
      
      case types.imagetopdf:
        draft.requesting = true;
        break;

      case types.htmltopdf:
        draft.requesting = true;
        break;

      case types.updateFunctionType:
        draft.funtionType = action.funType;
        break;
    }
  });
