import {
  addCompanyToSystem,
  getAllCompanies,
  // getCompanyById,
} from "../../services/api";
import {
  getCompanyRequest,
  getCompanySuccess,
  getCompanyError,
  // getByIdRequest,
  // getByIdSuccess,
  // getByIdError,
  addCompanyRequest,
  addCompanySuccess,
  addCompanyError,
} from "./company.actions";

export const getCompanyOperation = (company) => async (dispatch) => {
  dispatch(getCompanyRequest());

  getAllCompanies(company)
    .then(({ data }) => {
      dispatch(getCompanySuccess(data));
    })
    .catch((error) => {
      dispatch(getCompanyError(error.message));
    });
};

export const addCompanyOperation = (registryCode) => async (dispatch) => {
  dispatch(addCompanyRequest());

  addCompanyToSystem(registryCode)
    .then(() => {
      dispatch(addCompanySuccess());
      dispatch(getCompanyOperation());
    })
    .catch((error) => {
      dispatch(addCompanyError(error.message));
    });
};

// export const getCompanyByIdOperation = (id) => async (dispatch) => {
//   dispatch(getByIdRequest());

//   getCompanyById(id)
//     .then(({ data }) => {
//       console.log(data);
//       dispatch(getByIdSuccess(data));
//     })
//     .catch((error) => {
//       dispatch(getByIdError(error.message));
//     });
// };
// addCompanyToSystem();
