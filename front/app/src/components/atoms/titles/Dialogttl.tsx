import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";

interface DialogttlProps {
  children: React.ReactNode;
}

const Dialogttl = ({ children }: DialogttlProps) => {
  return <DialogTitle style={{ textAlign: "center" }}>{children}</DialogTitle>;
};

export default Dialogttl;
