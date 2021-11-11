import { combineReducers } from "redux";
import companyReducer from "./company/company.reducer";

const rootReducer = combineReducers({
  companies: companyReducer,
});

export default rootReducer;
