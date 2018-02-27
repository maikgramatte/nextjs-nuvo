/* eslint-disable arrow-parens */
/* eslint-disable arrow-body-style */
export const actionTypes = {
  LOGIN: 'USER_ACTION_LOGIN',
  LOGOUT: 'USER_ACTION_LOGOUT',
  INIT: 'USER_ACTION_INIT',
};

export const loginUser = (isServer, userName) => dispatch => {
  return dispatch({
    type: actionTypes.LOGIN,
    isServer,
    userName,
  });
};

// Initializes the User from a Cookie
export const initUser = (isServer, userCookieObject) => dispatch => {
  return dispatch({
    type: actionTypes.INIT,
    isServer,
    user: userCookieObject,
  });
};

export function initUserBE(userCookieObject) {
  return {
    type: actionTypes.INIT,
    isServer: true,
    userCookieObject,
  };
}

export function loginUserFE(userName) {
  return {
    type: actionTypes.LOGIN,
    isServer: false,
    userName,
  };
}

export function logoutUserFE() {
  return {
    type: actionTypes.LOGOUT,
    isServer: false,
  };
}
