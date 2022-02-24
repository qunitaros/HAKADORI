import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { User } from "../../interfaces";

import useUsers from "../../lib/hooks/useUsers";
import UsersCard from "../organisms/cards/UsersCard";

// ユーザー一覧ページ
const Users: React.FC = React.memo(() => {
  const { loading, users, userAge, userPrefecture, userField, handleGetUsers } =
    useUsers();

  useEffect(() => {
    handleGetUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Grid container justifyContent="center">
        {!loading ? (
          users?.length > 0 ? (
            <>
              {users?.map((user: User, index: number) => {
                return (
                  <Grid
                    key={index}
                    container
                    justifyContent="center"
                    style={{
                      margin: "0.5rem",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <UsersCard
                      id={user.id}
                      imageUrl={user.image.url}
                      userName={user.name}
                      userAge={userAge(user)}
                      userPrefecture={userPrefecture(user)}
                      userField={userField(user)}
                      userProfile={
                        user.profile.length > 50
                          ? user.profile.substring(0, 50) + "..."
                          : user.profile
                      }
                    />
                  </Grid>
                );
              })}
            </>
          ) : (
            <Typography component="p" variant="body2" color="textSecondary">
              まだ一人もユーザーがいません。
            </Typography>
          )
        ) : (
          <CircularProgress color="inherit" />
        )}
      </Grid>
    </>
  );
});

export default Users;
