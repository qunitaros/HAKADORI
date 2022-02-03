import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  linkBtn: {
    textTransform: "none",
    marginLeft: theme.spacing(1),
  },
}));

interface HeaderIconProps {
  children: React.ReactNode;
  routing: string;
}

const HeaderIcon = ({ children, routing }: HeaderIconProps) => {
  const classes = useStyles();
  return (
    <IconButton
      component={Link}
      to={`${routing}`}
      edge="start"
      className={classes.linkBtn}
      color="inherit"
    >
      {children}
    </IconButton>
  );
};

export default HeaderIcon;
