import React from "react";
// import React, { useEffect } from "react";
import Header from "./header/Header";
import Main from "./main/Main";

import styles from "./App.module.css";
// import { useDispatch } from "react-redux";
// import { getCompanyOperation } from "../redux/company/company.operations";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCompanyOperation());
  // }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
