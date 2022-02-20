import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import BoyIcon from "@mui/icons-material/Boy";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const StyledGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

interface UserProfileContentProps {
  age: string;
  prefecture: string;
  field: string;
  dayOff: string;
  profile: string;
}

const UserProfileContent = React.memo(
  ({ age, prefecture, field, dayOff, profile }: UserProfileContentProps) => {
    return (
      <StyledGrid container justifyContent="center">
        <Grid style={{ width: "86%" }}>
          <Divider style={{ marginTop: "1rem" }} textAlign="left">
            <BorderColorIcon />
          </Divider>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            style={{ marginTop: "0.6rem" }}
          >
            {age}歳 <br />
            住まい: {prefecture} <br />
            勉強中: {field} <br />
            休日: {dayOff}
          </Typography>
          <Divider style={{ marginTop: "1rem" }} textAlign="left">
            <BoyIcon />
          </Divider>
          {profile ? (
            <Typography
              variant="body2"
              component="p"
              style={{ marginTop: "0.6rem" }}
            >
              {profile}
            </Typography>
          ) : (
            <Typography
              variant="body2"
              component="p"
              color="textSecondary"
              style={{ marginTop: "0.6rem" }}
            >
              よろしくお願いします。
            </Typography>
          )}
        </Grid>
      </StyledGrid>
    );
  }
);

export default UserProfileContent;
