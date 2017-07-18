import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.css";

const Button = ({type, label}) => (
  <button className={type}>
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default Button;
