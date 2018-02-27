/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
export const actionTypes = {
  TICK: 'a',
  ADD: 'b',
};

export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() });
};
