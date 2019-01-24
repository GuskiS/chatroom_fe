import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router } from "@reach/router";

import ChatPage from "pages/Chat";
import LandingPage from "pages/Landing";
import withWebSocket from "hocs/withWebSocket";

class App extends Component {
  render() {
    const { send } = this.props;

    return (
      <Router>
        <LandingPage path="/" send={send} />
        <ChatPage path="/chat" send={send} />
      </Router>
    );
  }
}

App.propTypes = {
  send: PropTypes.func.isRequired,
};

export default withWebSocket(App);
