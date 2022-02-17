import React from "react";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

interface OpenUserButtonProps {
  id: number;
}

const OpenUserButton = React.memo(({ id }: OpenUserButtonProps) => {
  return (
    <Link to={`/user/${id}`}>
      <Button>プロフィールを見る</Button>
    </Link>
  );
});

export default OpenUserButton;
