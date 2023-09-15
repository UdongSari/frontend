const SET_LOGIN = "counter/SET_LOGIN";
const SET_LOGOUT = "counter/SET_LOGOUT";

export const setLogin = (id) => ({ type: SET_LOGIN, id });
export const setLogout = () => ({ type: SET_LOGOUT });

const initialState = {
  logined: 0,
  userId: null,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        logined: 1,
        userId: action.id,
      };
    case SET_LOGOUT:
      return {
        ...state,
        logined: 0,
        userId: null,
      };
    default:
      return state;
  }
}
