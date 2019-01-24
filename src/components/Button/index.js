import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.module.css";

const Button = ({ children, variant, ...props }) => (
  <button type="submit" className={classNames("nes-btn", `is-${variant}`, styles.size)} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "success", "warning", "error", "disabled"]),
};

export default Button;
