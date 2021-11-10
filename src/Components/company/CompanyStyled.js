import styled from "styled-components";

export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;

  .companyContent {
    flex-direction: column;
  }

  .companyIcon {
    width: 88px;
    height: 88px;
  }

  .companyTitle {
    height: 40px;

    font-weight: bold;
    font-size: 24px;
    line-height: 38px;

    color: #2d2c30;
  }

  .companyInfo {
    font-family: Open Sans;
    font-style: normal;
    font-weight: normal;

    font-size: 12px;
    line-height: 18px;
  }
`;
