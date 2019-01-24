import React, { Component } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";

import Auth from "components/Auth";
import Button from "components/Button";
import Layout from "components/Layout";
import ChatRoom from "components/ChatRoom";
import Container from "components/Container";
import InputGroup from "components/InputGroup";

import actions from "hocs/withWebSocket/actions";
import { formToObject } from "utils/common";

import styles from "./styles.module.css";

class ChatPage extends Component {
  onLogout = () => {
    const { send, user } = this.props;
    send(actions.logout(user));
  };

  onSubmit = event => {
    const { send, user } = this.props;
    send(actions.chat({ user, ...formToObject(event.target) }));
    event.preventDefault();
    event.target.reset();
  };

  render() {
    const { messages, user } = this.props;

    return (
      <Auth shouldAuth={true}>
        <Layout>
          <div className={classNames(styles.wrapper)}>
            <div className={styles.button}>
              <Button onClick={this.onLogout} variant="error">
                Logout
              </Button>
            </div>

            <div className={styles.chatroom}>
              <Container className={classNames(styles.nes, styles.container)}>
                <ChatRoom messages={messages} user={user} />
              </Container>
            </div>

            <form onSubmit={this.onSubmit}>
              <InputGroup name="content" button="CHAT" />
            </form>
          </div>
        </Layout>
      </Auth>
    );
  }
}

ChatPage.propTypes = {
  send: PropTypes.func.isRequired,
  user: PropTypes.string,
  messages: PropTypes.array.isRequired,
};

const mapStateToProps = ({ user, messages }) => ({ user, messages });

export default connect(mapStateToProps)(ChatPage);
