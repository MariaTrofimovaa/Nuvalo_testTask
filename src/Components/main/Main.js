import React from "react";
import Company from "../company/Company";
import CompanyList from "../companyList/CompanyList";

import styles from "./Main.module.css"

const Main = () => {
  return (
    <div className={styles.mainContainer}>
      <Company />
      <CompanyList />
    </div>
  );
};

export default Main;
