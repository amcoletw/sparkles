import React from "react";
import PropTypes from "prop-types";

import styles from "./Footer.css";

const Footer = ({text}) => (
    <div className={styles.main}>
      {text}
    </div>
);

Footer.propTypes = {
  text: PropTypes.string.isRequired
};

export default Footer;
