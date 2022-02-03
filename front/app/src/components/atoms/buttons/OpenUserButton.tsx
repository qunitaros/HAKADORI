import Button from "@material-ui/core/Button";
import React from "react";
import { Link } from "react-router-dom";

interface OpenUserButtonProps {
  id: number;
}

const OpenUserButton = ({ id }: OpenUserButtonProps) => {
  return (
    <Link to={`/user/${id}`}>
      <Button>プロフィールを見る</Button>
    </Link>
  );
};

export default OpenUserButton;
