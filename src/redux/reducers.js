import { navigate } from "@reach/router";

import { USER_AUTH_KEY, WEB_SOCKET_ACTIONS } from "utils/constants";

const defaultState = {
  error: undefined,
  user: undefined,
  messages: [],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case WEB_SOCKET_ACTIONS.ERROR: {
      return { ...state, error: action.data.error };
    }
    case WEB_SOCKET_ACTIONS.LOGIN: {
      localStorage.setItem(USER_AUTH_KEY, action.data.user);
      navigate("/chat");
      return { ...state, error: null, messages: [], ...action.data };
    }
    case WEB_SOCKET_ACTIONS.LOGOUT:
    case WEB_SOCKET_ACTIONS.INACTIVE: {
      localStorage.removeItem(USER_AUTH_KEY);
      navigate("/");
      return { ...state, ...action.data, user: null };
    }
    case WEB_SOCKET_ACTIONS.CHAT: {
      return { ...state, messages: [...state.messages, action.data.message] };
    }
    default:
      return state;
  }
};

export default reducers;
