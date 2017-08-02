import React from "react";
import PropTypes from "prop-types";
import styles from "./GridContainer.css"

const GridContainer = ({children}) => (
    <div className={styles.main}>
      {children}
    </div>
);

GridContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default GridContainer;
