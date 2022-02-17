import React from "react";
import Image from "../image/studyMain.jpeg";
import { styled } from "@mui/material/styles";

const StyledImage = styled("img")(() => ({
  height: "auto",
  maxHeight: "500px",
  overflow: "hidden",
  width: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
}));

const Root: React.FC = React.memo(() => {
  return (
    <>
      <div>
        <StyledImage src={Image} alt="backgroundImage" />
      </div>
      <footer></footer>
    </>
  );
});

export default Root;
