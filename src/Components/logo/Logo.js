import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../icons/logo.png";
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link to="/" alt="mainPage">
        <img src={logoImg} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
