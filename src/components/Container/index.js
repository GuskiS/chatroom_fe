import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.module.css";

const Container = ({ children, className }) => (
  <div className={classNames("nes-container", "is-rounded", className, styles.container)}>{children}</div>
);

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
