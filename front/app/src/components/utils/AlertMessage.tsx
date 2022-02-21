import React from "react";
import Snack from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";

const Alerts = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface AlertMessageProps {
  open: boolean;
  setOpen: Function;
  severity: "error" | "success" | "info" | "warning";
  message: string;
}

const AlertMessage = React.memo(
  ({ open, setOpen, severity, message }: AlertMessageProps) => {
    const handleCloseAlertMessage = (
      e?: React.SyntheticEvent,
      reason?: string
    ) => {
      if (reason === "clickaway") return;

      setOpen(false);
    };

    return (
      <>
        <Snack
          open={open}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleCloseAlertMessage}
        >
          <Alerts onClose={handleCloseAlertMessage} severity={severity}>
            {message}
          </Alerts>
        </Snack>
      </>
    );
  }
);

export default AlertMessage;
