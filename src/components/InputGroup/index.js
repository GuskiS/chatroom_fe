import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Text from "components/Text";
import Button from "components/Button";

import styles from "./styles.module.css";

const InputGroup = ({ button, name, label }) => (
  <Fragment>
    {label && (
      <label htmlFor={name}>
        <Text>{label}</Text>
      </label>
    )}

    <div className="nes-field is-inline">
      <input
        className={classNames("nes-input", styles.spacing)}
        type="text"
        name={name}
        id={name}
        required
        autoComplete="off"
      />
      <Button variant="primary">{button}</Button>
    </div>
  </Fragment>
);

InputGroup.propTypes = {
  button: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
};

export default InputGroup;
