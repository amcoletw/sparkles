import React from "react";
import PropTypes from "prop-types";

const MainContainer = ({children}) => (
    <div>{children}</div>
);

MainContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainContainer;
