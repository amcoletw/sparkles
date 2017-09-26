import React from "react";
import PropTypes from "prop-types";
import styles from "./MainContainer.css";

const MainContainer = ({children}) => (
    <div className={styles.main}>{children}</div>
);

MainContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainContainer;
