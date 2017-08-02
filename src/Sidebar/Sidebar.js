import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({children}) => (
    <div>{children}</div>
);

Sidebar.propTypes = {
  children: PropTypes.element.isRequired
};

export default Sidebar;
