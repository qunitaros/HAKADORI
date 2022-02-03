import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    marginBottom: "1.5rem",
  },
  preview: {
    width: "100%",
  },
}));

interface CancelIconProps {
  imageUrl: string | null;
  onClick: any;
}

const PreviewCancelIcon = ({ imageUrl, onClick }: CancelIconProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <IconButton color="inherit" onClick={onClick}>
        <CancelIcon />
      </IconButton>
      <img src={imageUrl} alt="preview img" className={classes.preview} />
    </Box>
  );
};

export default PreviewCancelIcon;
