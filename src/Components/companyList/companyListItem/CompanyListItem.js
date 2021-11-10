import React from "react";
import {
  addCompanyOperation,
  getCompanyOperation,
} from "../../../redux/company/company.operations";
import { useDispatch } from "react-redux";
// import { addCompanyOperation } from "../../../redux/company/company.operations";
// import { useDispatch, useSelector } from "react-redux";
// import { getCompanyOperation } from "../../../redux/company/company.operations";
import // getCompaniesSelector,
// getRegistryCodeSelector,
"../../../redux/company/company.selectors";
// import { CompanyListItemContainer } from "./CompanyListItemStyled";
// import { AddedListItemContainer } from "./CompanyListItemStyled";

import styles from "./CompanyListItem.module.css";

const CompanyListItem = ({ company, name, registryCode }) => {
  // console.log("company :>> ", company.id);
  const dispatch = useDispatch();
  const addCompany = () => {
    // console.log("registryCode :>> ", registryCode);
    // addCompanyOperation(registryCode);
    dispatch(addCompanyOperation(registryCode));

    dispatch(getCompanyOperation());
  };

  const companyID = company.id;
  const classes = companyID !== null ? styles.addedCard : styles.card;

  return (
    <li className={styles.list}>
      <a href="#!" className={styles.companyLink}>
        <div className={classes}>
          <div className={styles.cardContent}>
            <h3 className={styles.companyItemTitle}>{name} </h3>
            <p className={styles.companyItemNumber}>Reg.nr:{registryCode}</p>
          </div>

          {companyID === null && (
            <button
              type="submit"
              onClick={addCompany}
              className={styles.addButton}
            >
              ADD to SYSTEM
            </button>
          )}
        </div>
      </a>
    </li>
  );
};

export default CompanyListItem;
