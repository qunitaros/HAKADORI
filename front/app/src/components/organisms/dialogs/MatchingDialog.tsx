import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useWindowSize from "react-use/lib/useWindowSize";

import Confetti from "react-confetti";

import MatchingDialogHeader from "../../layouts/MatchingDialogHeader";

interface MatchingDialogProps {
  open: boolean;
  onClose: () => void;
  userName: string;
}
const MatchingDialog = React.memo(
  ({ open, onClose, userName }: MatchingDialogProps) => {
    const { width, height } = useWindowSize();

    return (
      <>
        {open ? (
          <Confetti width={width} height={height} recycle={true} />
        ) : (
          <></>
        )}

        <Dialog open={open} keepMounted onClose={onClose}>
          <MatchingDialogHeader />
          <DialogContent>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography
                  variant="body1"
                  component="p"
                  gutterBottom
                  sx={{ color: "red" }}
                >
                  {userName}さんとマッチングしました! <br />
                  早速メッセージを送ってみましょう!
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </>
    );
  }
);

export default MatchingDialog;
