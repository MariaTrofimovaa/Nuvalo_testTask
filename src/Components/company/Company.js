import React from "react";

import icon from "../../icons/company_icon.png";
import { CompanyContainer } from "./CompanyStyled";

const Company = () => {
// console.log('props :>> ', props);
  
  return (
    <CompanyContainer>
      <img src={icon} alt="companyIcon" className="companyIcon" />
      <div className="companyContent">
        <h2 className="companyTitle">My companies</h2>
        <p className="companyInfo">
          According to the EE Business Register, the following companies are
          related to you.{" "}
        </p>
      </div>

    </CompanyContainer>
  );
};

export default Company;
