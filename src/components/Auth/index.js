import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "@reach/router";

import { USER_AUTH_KEY } from "utils/constants";

const Auth = ({ children, shouldAuth }) => {
  const isAuthed = localStorage.getItem(USER_AUTH_KEY);

  if (shouldAuth) {
    if (!isAuthed) return <Redirect to="/" noThrow />;
  } else {
    if (isAuthed) return <Redirect to="/chat" noThrow />;
  }

  return children;
};

Auth.propTypes = {
  children: PropTypes.node.isRequired,
  shouldAuth: PropTypes.bool.isRequired,
};

export default Auth;
