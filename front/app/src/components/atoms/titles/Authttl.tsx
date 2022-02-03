import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    textAlign: "center",
  },
}));

interface AuthttleProps {
  title: string;
}

const Authttl = ({ title }: AuthttleProps) => {
  const classes = useStyles();

  return <CardHeader className={classes.header} title={title} />;
};
export default Authttl;
