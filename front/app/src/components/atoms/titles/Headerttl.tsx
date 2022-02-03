import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit",
  },
}));

interface HeaderTitleProps {
  children: React.ReactNode;
}

const Headerttl = ({ children }: HeaderTitleProps) => {
  const classes = useStyles();
  return (
    <Typography component={Link} to="/" variant="h6" className={classes.title}>
      {children}
    </Typography>
  );
};

export default Headerttl;
