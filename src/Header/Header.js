import React from "react";
import PropTypes from "prop-types";

import styles from "./Header.css";

const Header = ({text}) => (
  <div className={styles.container}>{text}</div>
);

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
