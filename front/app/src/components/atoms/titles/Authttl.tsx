import React from "react";
import { styled } from "@mui/material/styles";

const StyledHeader = styled("h4")(() => ({
  textAlign: "center",
  position: "relative",
  borderBottom: "double 5px #aaa",
  fontWeight: "bold",
  fontSize: "1.3rem",
  paddingBottom: "1rem",
  span: {
    position: "relative",
    zIndex: 2,
  },
  "::before": {
    content: "attr(data-en)",
    position: "absolute",
    transform: "rotate(-5deg)",
    top: "-20px",
    left: 0,
    color: "#aaa",
    fontSize: "1.8rem",
    fontWeight: 400,
    fontFamily: "luxus-brut, cursive",
    fontStyle: "italic",
  },
}));

interface AuthttleProps {
  title: string;
}

const Authttl = React.memo(({ title }: AuthttleProps) => {
  return <StyledHeader data-en="Hakadori">{title}</StyledHeader>;
});
export default Authttl;
