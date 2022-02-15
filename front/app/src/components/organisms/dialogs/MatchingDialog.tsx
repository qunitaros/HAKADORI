import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  grid: {},
  content: {},
}));

interface MatchingDialogProps {
  open: boolean;
  onClose: () => void;
  matchingCount: number;
}

const MatchingDialog = ({
  open,
  onClose,
  matchingCount,
}: MatchingDialogProps) => {
  const classes = useStyles();

  return (
    <Dialog open={open} keepMounted onClose={onClose}>
      <DialogContent>
        <Grid container justifyContent="center">
          <Grid item className={classes.grid}>
            <Typography
              variant="body1"
              component="p"
              gutterBottom
              className={classes.content}
            >
              現在{matchingCount}名の方とマッチング中です。
              メッセージを送ってみましょう!
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default MatchingDialog;
