import React, { Component } from "react";
import PropTypes from "prop-types";

import ChatMessage from "components/ChatMessage";
import ChatNotification from "components/ChatNotification";

import styles from "./styles.module.css";

class ChatRoom extends Component {
  messagesRef = React.createRef();

  componentDidUpdate() {
    const children = this.messagesRef.current.children;
    const last = children[children.length - 1];
    last && last.scrollIntoView({ smooth: true });
  }

  render() {
    const { messages, user } = this.props;
    return (
      <div className={styles.messages} ref={this.messagesRef}>
        {messages.map((message, index) =>
          message.user ? (
            <ChatMessage
              key={index}
              className={styles.item}
              message={message}
              direction={user === message.user ? "right" : "left"}
            />
          ) : (
            <ChatNotification key={index} className={styles.item} message={message} />
          )
        )}
      </div>
    );
  }
}

ChatRoom.propTypes = {
  messages: PropTypes.array.isRequired,
  user: PropTypes.string,
};

export default ChatRoom;
