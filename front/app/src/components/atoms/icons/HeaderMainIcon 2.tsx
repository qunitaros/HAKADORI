import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import LogoImage from "../../../assets/logo.png";
import { AuthContext } from "../../../App";

const StyledLogo = styled("img")(() => ({
  maxWidth: 40,
  marginRight: "10px",
}));

const HeaderMainIcon = () => {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <Link to={isSignedIn ? "/home" : "/"}>
      <StyledLogo src={LogoImage} />
    </Link>
  );
};

export default HeaderMainIcon;
