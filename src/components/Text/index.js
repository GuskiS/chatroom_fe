import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.module.css";

const Text = ({ children, color, variant, wordBreak }) => (
  <p
    className={classNames(styles.text, styles[color], {
      title: variant === "title",
      [styles.break]: wordBreak,
    })}
  >
    {children}
  </p>
);

Text.propTypes = {
  wordBreak: PropTypes.bool,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["title"]),
  color: PropTypes.oneOf(["yellow"]),
};

export default Text;
