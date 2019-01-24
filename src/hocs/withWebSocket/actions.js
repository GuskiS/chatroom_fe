import { WEB_SOCKET_ACTIONS } from "utils/constants";

const error = error => ({ type: WEB_SOCKET_ACTIONS.ERROR, data: { error } });
const chat = message => ({ type: WEB_SOCKET_ACTIONS.CHAT, data: { message } });
const login = user => ({ type: WEB_SOCKET_ACTIONS.LOGIN, data: { user } });
const logout = user => ({ type: WEB_SOCKET_ACTIONS.LOGOUT, data: { user } });

const actions = {
  error,
  chat,
  login,
  logout,
};

export default actions;
