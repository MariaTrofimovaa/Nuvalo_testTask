import { createAction } from "@reduxjs/toolkit";

const getCompanyRequest = createAction("company/getCompanyRequest");
const getCompanySuccess = createAction("company/getCompanySuccess");
const getCompanyError = createAction("company/getCompanyError");

// const getByIdRequest = createAction("company/getByIdRequest");
// const getByIdSuccess = createAction("company/getByIdSuccess");
// const getByIdError = createAction("company/getByIdError");

const addCompanyRequest = createAction("company/addCompanyRequest");
const addCompanySuccess = createAction("company/addCompanySuccess");
const addCompanyError = createAction("company/addCompanyError");

export {
  getCompanyRequest,
  getCompanySuccess,
  getCompanyError,
  // getByIdRequest,
  // getByIdSuccess,
  // getByIdError,
  addCompanyRequest,
  addCompanySuccess,
  addCompanyError,
};
