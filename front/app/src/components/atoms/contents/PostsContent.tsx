import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const StyledContent = styled(Typography)(() => ({
  marginBottom: 12,
}));

interface PostsContentProps {
  children: React.ReactNode;
}

const PostsContent = React.memo(({ children }: PostsContentProps) => {
  return <StyledContent variant="h5">{children}</StyledContent>;
});

export default PostsContent;
