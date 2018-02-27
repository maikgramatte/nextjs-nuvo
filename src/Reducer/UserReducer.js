import Cookies from 'js-cookie';
import { actionTypes } from '../Actions/userActions';

const USER_COOKIE_IDENT = 'u';

const InitialState = {
  userName: null,
  logged: false,
  userType: 'anonymous',
  userId: null,
  access: null,
  lastLogin: null,
  institutionId: null,
};

function getTime() {
  const d = new Date();
  const n = d.getTime();

  return n;
}

function setUserCookie(user) {
  Cookies.set(USER_COOKIE_IDENT, user, { expires: 7 });
}

export default (state = InitialState, action) => {
  const time = getTime();
  switch (action.type) {
    case actionTypes.LOGOUT:
      return InitialState;

    case actionTypes.INIT:
      return {
        ...state,
        userName: action.userCookieObject.userName,
        access: time,
        logged: true,
        lastLogin: action.userCookieObject.lastLogin,
      };

    case actionTypes.LOGIN:
      // Save the State in a Cookie to Maintain on Client
      setUserCookie({
        userName: action.userName,
        lastLogin: time,
      });

      return {
        ...state,
        userName: action.userName,
        access: time,
        logged: true,
        userType: 'user',
        lastLogin: time,
      };
    default: return state;
  }
};

export {
  InitialState,
  USER_COOKIE_IDENT,
};
