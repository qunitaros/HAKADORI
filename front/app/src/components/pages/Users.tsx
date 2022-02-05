import React, { useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";

import { User } from "../../interfaces";

import useUsers from "../../lib/hooks/useUsers";
import UsersCard from "../organisms/cards/UsersCard";
import UsersName from "../atoms/titles/UsersName";
import UsersInfo from "../atoms/contents/UsersInfo";

// ユーザー一覧ページ
const Users: React.FC = () => {
  const { loading, users, userAge, userPrefecture, handleGetUsers } =
    useUsers();

  useEffect(() => {
    handleGetUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading ? (
        users?.length > 0 ? (
          <Grid container justifyContent="center">
            {users?.map((user: User, index: number) => {
              return (
                <Grid key={index}>
                  <Grid item style={{ margin: "0.5rem", cursor: "pointer" }}>
                    <UsersCard id={user.id} imageUrl={user.image.url}>
                      <UsersName>{user.name}さん</UsersName>
                      <UsersInfo>
                        {userAge(user)}歳 ({userPrefecture(user)})
                      </UsersInfo>
                    </UsersCard>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography component="p" variant="body2" color="textSecondary">
            まだ一人もユーザーがいません。
          </Typography>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Users;
