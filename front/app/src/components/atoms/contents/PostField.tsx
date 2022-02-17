import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledField = styled(Typography)(() => ({
  fontWeight: "bold",
  fontSize: "1.2rem",
}));

interface PostFieldProps {
  postField: string;
}

const PostField = React.memo(({ postField }: PostFieldProps) => {
  return <StyledField>{postField}</StyledField>;
});
export default PostField;
