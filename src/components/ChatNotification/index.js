import React from "react";
import PropTypes from "prop-types";

import Text from "components/Text";
import Container from "components/Container";

const ChatNotification = ({ className, message }) => (
  <div className={className}>
    <Container>
      <Text>{message.content}</Text>
    </Container>
  </div>
);

ChatNotification.propTypes = {
  className: PropTypes.string.isRequired,
  message: PropTypes.object.isRequired,
};

export default ChatNotification;
