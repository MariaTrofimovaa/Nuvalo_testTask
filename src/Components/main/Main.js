import React from "react";
import Company from "../company/Company";
import CompanyList from "../companyList/CompanyList";

import {MainContainer} from "./MainStyled"

const Main = () => {
  return (
    <MainContainer>
      <Company />
      <CompanyList />
    </MainContainer>
  );
};

export default Main;
