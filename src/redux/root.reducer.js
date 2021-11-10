import { combineReducers } from "redux";
// import addedCompaniesReducer from "./addedCompany/addedCompany.reducer";
// import persistReducer from "redux-persist/lib/persistReducer";
import companyReducer from "./company/company.reducer";


const rootReducer = combineReducers({
  companies: companyReducer,
  // addedCompanies: addedCompaniesReducer,
});

export default rootReducer;
