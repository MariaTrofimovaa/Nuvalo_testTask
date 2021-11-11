import { createReducer } from "@reduxjs/toolkit";

import { addCompanySuccess, getCompanySuccess } from "./company.actions";

const companyReducer = createReducer([], {
  [getCompanySuccess]: (_, { payload }) => payload,

  [addCompanySuccess]: (state, { payload }) => [...state],

  // [getByIdSuccess]: (_, { payload }) => ({
  //   id: payload.id,
  //   name: payload.name,
  //   registryCode: payload.registryCode,
  // }),
});

export default companyReducer;
