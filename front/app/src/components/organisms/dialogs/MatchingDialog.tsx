import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface MatchingDialogProps {
  open: boolean;
  onClose: () => void;
  matchingCount: number;
}

const MatchingDialog = React.memo(
  ({ open, onClose, matchingCount }: MatchingDialogProps) => {
    return (
      <Dialog open={open} keepMounted onClose={onClose}>
        <DialogContent>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body1" component="p" gutterBottom>
                現在{matchingCount}名の方とマッチング中です。
                メッセージを送ってみましょう!
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  }
);

export default MatchingDialog;
