import React from "react";
import PropTypes from "prop-types";
import styles from "./Sidebar.css";

const Sidebar = ({children}) => (
    <div className={styles.main}>{children}</div>
);

Sidebar.propTypes = {
  children: PropTypes.element.isRequired
};

export default Sidebar;
