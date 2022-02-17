import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { UserContext } from "../../pages/User";

interface PostDeleteButtonProps {
  id: number;
}

const PostDeleteButton = ({ id }: PostDeleteButtonProps) => {
  const { handleDeletePost } = useContext(UserContext);
  return <Button onClick={() => handleDeletePost(id)}>削除</Button>;
};

export default PostDeleteButton;
