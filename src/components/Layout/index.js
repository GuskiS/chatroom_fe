import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Layout = ({ children }) => <div className={styles.content}>{children}</div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
