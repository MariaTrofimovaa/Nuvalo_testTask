import React from "react";
import icon from "../../icons/company_icon.png";

import styles from "./Company.module.css";

const Company = () => {
  return (
    <div className={styles.companyContainer}>
      <img src={icon} alt="companyIcon" className={styles.companyIcon} />
      <div className={styles.companyContent}>
        <h2 className={styles.companyTitle}>My companies</h2>
        <p className={styles.companyInfo}>
          According to the EE Business Register, the following companies are
          related to you.{" "}
        </p>
      </div>
    </div>
  );
};

export default Company;
