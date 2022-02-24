import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../../App";

const Headerttl = React.memo(() => {
  const { isSignedIn } = useContext(AuthContext);

  return (
    <Typography
      variant="h6"
      sx={{
        flexGrow: 2,
        textDecoration: "none",
        color: "inherit",
        fontWeight: "bold",
      }}
      component={Link}
      to={isSignedIn ? "/home" : "/"}
    >
      HAKADRI
    </Typography>
  );
});

export default Headerttl;
