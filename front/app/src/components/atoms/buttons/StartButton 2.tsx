import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const StyledButton = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: 0,
  right: 0,
  margin: "auto",
  width: "10rem",
  display: "block",
  padding: "0.6em 0.88em",
  background: "linear-gradient(to right, #e66465 50%, #fff 50%)",
  backgroundSize: "200% 100.5%",
  backgroundPosition: "right bottom",
  font: "1.25em 'Montserrat'",
  color: "#020202",
  border: "none",
  borderLeft: "0.20em solid #e66465",
  borderColor: "none",
  boxShadow: "3px 3px 2px rgba(0,0,0,0.08)",
  transition: "all .5s ease-out",
  fontWeight: "bold",
  "&:hover ": {
    backgroundPosition: "left bottom",
    color: " white",
  },
}));

const StartButton = () => {
  return (
    <Link to="/signin">
      <StyledButton color="inherit" component="span">
        はじめる
      </StyledButton>
    </Link>
  );
};

export default StartButton;
