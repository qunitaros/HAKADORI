import React from "react";
import DialogTitle from "@mui/material/DialogTitle";

interface DialogttlProps {
  children: React.ReactNode;
}

const Dialogttl = React.memo(({ children }: DialogttlProps) => {
  return <DialogTitle style={{ textAlign: "center" }}>{children}</DialogTitle>;
});

export default Dialogttl;
