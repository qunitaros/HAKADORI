import React from "react";
import Button from "@mui/material/Button";

interface ActiveLikeUserOpenButtonProps {
  open: () => void;
}

const ActiveLikeUserOpenButton = ({ open }: ActiveLikeUserOpenButtonProps) => {
  return (
    <Button variant="outlined" onClick={open}>
      自分からいいねした人を見る
    </Button>
  );
};

export default ActiveLikeUserOpenButton;
