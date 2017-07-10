import React from "react";
import PropTypes from "prop-types";

const Button = ({type}) => (
    <button type={type}/>
);

Button.propTypes = {
    type: PropTypes.string.isRequired
};

export default Button;
