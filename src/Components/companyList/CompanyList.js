import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyOperation } from "../../redux/company/company.operations";

import { getCompaniesSelector } from "../../redux/company/company.selectors";
import CompanyListItem from "./companyListItem/CompanyListItem";
import styles from "./CompanyList.module.css";

const CompanyList = () => {
  const companies = useSelector(getCompaniesSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyOperation());
  }, [dispatch]);

  return (
    <ul className={styles.companyList}>
      {companies.map((item) => (
        <CompanyListItem
          key={item.name}
          name={item.name}
          registryCode={item.registryCode}
          company={item}
        />
      ))}
    </ul>
  );
};

export default CompanyList;
