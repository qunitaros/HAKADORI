import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const StyledGrid = styled(Grid)(({ theme }) => ({
  arginTop: theme.spacing(3),
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
        <Grid item>
          <Typography variant="body1" component="p" gutterBottom>
            {age}歳（{prefecture}) <br />
            勉強中:{field} <br />
            休日:{dayOff}
          </Typography>
          <Divider style={{ marginTop: "0.5rem" }} />
          <Typography
            variant="body2"
            component="p"
            gutterBottom
            style={{ marginTop: "0.5rem", fontWeight: "bold" }}
          >
            自己紹介
          </Typography>
          {profile ? (
            <Typography variant="body2" component="p" color="textSecondary">
              {profile}
            </Typography>
          ) : (
            <Typography variant="body2" component="p" color="textSecondary">
              よろしくお願いします。
            </Typography>
          )}
        </Grid>
      </StyledGrid>
    );
  }
);

export default UserProfileContent;
