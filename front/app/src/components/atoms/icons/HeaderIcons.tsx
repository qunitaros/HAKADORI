import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Theme, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
  linkBtn: {
    textTransform: "none",
    marginLeft: theme.spacing(1),
  },
}));

interface HeaderIconButtonProps {
  children: React.ReactNode;
  link: string;
}

const HeaderIconButton = ({ children, link }: HeaderIconButtonProps) => {
  const classes = useStyles();

  return (
    <IconButton
      component={Link}
      to={link}
      edge="start"
      className={classes.linkBtn}
      color="inherit"
    >
      {children}
    </IconButton>
  );
};

export default HeaderIconButton;
