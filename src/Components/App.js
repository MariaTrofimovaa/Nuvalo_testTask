import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";

import { MainContainer } from "./AppStyled";
// import { useDispatch } from "react-redux";
// import { getAllCompanies } from "../services/api";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllCompanies());
  // }, [dispatch]);

  return (
    <MainContainer>
      <Header />
      <Main />
    </MainContainer>
  );
};

export default App;
