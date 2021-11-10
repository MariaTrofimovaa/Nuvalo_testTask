import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../icons/logo.png";
import { LogoContainer } from "./LogoStyled";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/" alt="mainPage">
        <img src={logoImg} alt="Logo" />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
