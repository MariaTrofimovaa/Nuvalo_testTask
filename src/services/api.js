import axios from "axios";

const baseURL = "https://localhost:5001/api/companies";

export const getAllCompanies = async () => {
  try {
    const response = await axios.get(baseURL + `/my`);
    // console.log("response :>> ", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// export const getCompanyById = async (id) => {
//   try {
//     const response = await axios.get(baseURL + `/${id}`);
//     // console.log("responseID :>> ", response);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const headers = {
//   "Content-Type": "application/json",
// };

export const addCompanyToSystem = async (registryCode) => {
  try {
    const response = await axios.post(baseURL, {
      registryCode: registryCode,
    });

    console.log(response);
    // res.data.headers["Content-Type"];

    // const response = await axios.post(baseURL , registryCode);
    // console.log("responseAdd :>> ", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// addCompanyToSystem();
