import React from "react";
import PropTypes from "prop-types";

import styles from "./InputField.css";

const InputField = ({type, title}) => (
    <input type={type} name={title} className={styles.main}/>
);

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default InputField;
