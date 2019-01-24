import React, { Component } from "react";
import { connect } from "react-redux";

import { USER_AUTH_KEY } from "utils/constants";

import actions from "./actions";

const withWebSocket = WrappedComponent => {
  class WebSocketHOC extends Component {
    componentDidMount = () => {
      this.socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_SERVER);
      this.socket.addEventListener("open", this.onOpen);
      this.socket.addEventListener("close", this.onClose);
      this.socket.addEventListener("message", this.onMessage);
    };

    componentWillUnmount = () => {
      this.socket.removeEventListener("open", this.onOpen);
      this.socket.removeEventListener("close", this.onClose);
      this.socket.removeEventListener("message", this.onMessage);
      this.socket.close();
    };

    onOpen = () => {
      const user = localStorage.getItem(USER_AUTH_KEY);
      user && this.send(actions.login(user));
    };

    onClose = () => {
      this.props.dispatch(actions.logout(localStorage.getItem(USER_AUTH_KEY)));
    };

    onMessage = event => this.props.dispatch(JSON.parse(event.data));

    send = data => {
      switch (this.socket.readyState) {
        case this.socket.OPEN:
          return this.socket.send(JSON.stringify(data));
        default:
          this.props.dispatch(actions.error("Server unavailable."));
      }
    };

    render() {
      return <WrappedComponent send={this.send} {...this.props} />;
    }
  }

  return connect()(WebSocketHOC);
};

export default withWebSocket;
