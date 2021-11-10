import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // addCompanyOperation,
  // addCompanyOperation,
  // getCompanyByIdOperation,
  getCompanyOperation,
} from "../../redux/company/company.operations";
import { getCompaniesSelector } from "../../redux/company/company.selectors";
// import { getCompanyById } from "../../services/api";
// import { useDispatch } from "react-redux";
// import { getCompanyOperation } from "../../redux/company/company.operations";
// import { getAllCompanies } from "../../services/api";
import CompanyListItem from "./companyListItem/CompanyListItem";
import { CompanyListContainer } from "./CompanyListStyled";

const CompanyList = () => {
  const companies = useSelector(getCompaniesSelector);
  // console.log("companies :>> ", companies);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyOperation());
    // dispatch(addCompanyOperation());
    // getCompanyById("fd93bb9c-2bfd-42fd-8400-d1f76a2b4061");
    // getCompanyByIdOperation("fd93bb9c-2bfd-42fd-8400-d1f76a2b4061");
  }, [dispatch]);

  return (
    <CompanyListContainer>
      {companies.map((item) => (
        <CompanyListItem
          key={item.name} // ключ заменить на id ********
          name={item.name}
          registryCode={item.registryCode}
          company={item}
        />
      ))}
    </CompanyListContainer>
  );
};

export default CompanyList;
