import React from "react";
import Button from "@material-ui/core/Button";

interface OpenPostButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const OpenPostButton = ({ children, onClick }: OpenPostButtonProps) => {
  return (
    <Button size="small" onClick={onClick}>
      {children}
    </Button>
  );
};

export default OpenPostButton;
