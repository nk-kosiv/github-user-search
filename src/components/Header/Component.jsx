import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1>GitHub User Search</h1>
    </header>
  );
};

Header.propTypes = {};

export default Header;
