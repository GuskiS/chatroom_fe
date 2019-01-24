import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Text from "components/Text";

import styles from "./styles.module.css";

const ChatMessage = ({ className, message, direction }) => (
  <div className={classNames(className, styles[direction])}>
    <i title={message.user} className={classNames("nes-bcrikko", styles.icon)} />

    <div className={styles.message}>
      <span>{message.user} wrote:</span>
      <div className={classNames("nes-balloon", `from-${direction}`)}>
        <Text wordBreak>{message.content}</Text>
      </div>
    </div>
  </div>
);

ChatMessage.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
};

export default ChatMessage;
