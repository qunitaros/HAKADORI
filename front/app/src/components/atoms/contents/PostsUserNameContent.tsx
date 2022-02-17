import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledTitle = styled(Typography)(() => ({
  fontSize: 14,
}));

interface PostsUserNameContentProps {
  children: React.ReactNode;
}

const PostsUserNameContent = React.memo(
  ({ children }: PostsUserNameContentProps) => {
    return (
      <>
        <StyledTitle color="textSecondary" gutterBottom>
          {children}
        </StyledTitle>
      </>
    );
  }
);

export default PostsUserNameContent;
