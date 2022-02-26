import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../../App";
import Grid from "@mui/material/Grid";

const Headerttl = React.memo(() => {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <Grid flexGrow={2}>
      <Typography
        variant="h6"
        sx={{
          textDecoration: "none",
          color: "inherit",
          fontWeight: "bold",
          background:
            "linear-gradient(currentColor 0 0) 0 100% /var(--d, 0) 3px no-repeat",
          transition: "0.5s",

          ":hover": {
            "--d": "100%",
          },
        }}
        component={Link}
        to={isSignedIn ? "/home" : "/"}
      >
        HAKADORI
      </Typography>
    </Grid>
  );
});

export default Headerttl;
