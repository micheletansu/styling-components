/*
 *
 * Index reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SET_POSITION } from './constants';

export const initialState = {
  position: 1,
};

/* eslint-disable default-case, no-param-reassign */
const indexReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_POSITION:
        // state.set('position', action.payload);
        draft.position = action.payload;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default indexReducer;
