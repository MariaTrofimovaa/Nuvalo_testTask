import React from "react";
import { addCompanyOperation } from "../../../redux/company/company.operations";
import { useDispatch } from "react-redux";

import styles from "./CompanyListItem.module.css";

const CompanyListItem = ({ company, name, registryCode, addToCart }) => {
  const dispatch = useDispatch();

  const addCompany = () => {
    dispatch(addCompanyOperation(registryCode));
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
