import { createReducer } from "@reduxjs/toolkit";

import {  getCompanySuccess } from "./company.actions";


const companyReducer = createReducer([], {
  [getCompanySuccess]: (_, { payload }) => payload,
  // [getByIdSuccess]: (_, { payload }) => ({
  //   id: payload.id,
  //   name: payload.name,
  //   registryCode: payload.registryCode,
  // }),
  // [addCompanySuccess]: (_, { payload }) => payload,
});

export default companyReducer;
