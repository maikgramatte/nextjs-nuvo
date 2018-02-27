
import InitialState from './InitialState';
import { actionTypes } from '../Actions';

export default (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light });
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    default: return state;
  }
};
