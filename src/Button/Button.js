import React from "react";
import PropTypes from "prop-types";
// import styles from "./Button.css";

// const renderButtonClass = ({type}) => (type ? primary : secondary);
// className={styles.renderButtonClass(type)}

const Button = ({type, label}) => (
  <button type={type} className={type.primary}>{label}</button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired
};

export default Button;
