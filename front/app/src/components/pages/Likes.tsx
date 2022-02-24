import React from "react";
import { useEffect } from "react";
import { ActiveLikeUser, PassiveLikeUser } from "../../interfaces";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import useLikes from "../../lib/hooks/useLikes";
import LikesCard from "../organisms/cards/LikesCard";
import ActiveLikeUsersDialog from "../organisms/dialogs/ActiveLikeUsersDialog";
import ActiveLikeUsersList from "../organisms/lists/ActiveLikeUsersList";
import ActiveLikeUserOpenButton from "../atoms/buttons/ActiveLikeUserOpenButton";

const Likes: React.FC = React.memo(() => {
  const {
    loading,
    passiveLikeUsers,
    handleGetLikeUsers,
    activeLikeUsers,
    activeLikeUserDialogOpen,
    setActiveLikeUserDialogOpen,
  } = useLikes();

  useEffect(() => {
    handleGetLikeUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading ? (
        <Grid container justifyContent="center">
          {activeLikeUsers.length > 0 ? (
            <ActiveLikeUserOpenButton
              open={() => setActiveLikeUserDialogOpen(true)}
            />
          ) : (
            <></>
          )}
          {passiveLikeUsers.length > 0 ? (
            <>
              <Grid
                container
                justifyContent="center"
                style={{ marginTop: "2rem" }}
              >
                {passiveLikeUsers.map(
                  (passiveLikeUser: PassiveLikeUser, index: number) => {
                    return (
                      <Grid
                        key={index}
                        container
                        justifyContent="center"
                        style={{ marginTop: "1rem" }}
                      >
                        <LikesCard
                          id={passiveLikeUser.passiveLike.id}
                          imageUrl={passiveLikeUser.passiveLike.image.url}
                        >
                          {passiveLikeUser.isMatched ? (
                            <>
                              <Typography
                                variant="body2"
                                component="p"
                                sx={{ fontWeight: "bold", color: "#FF3333" }}
                              >
                                {passiveLikeUser.passiveLike.name}
                                さんとマッチングしました!
                              </Typography>
                            </>
                          ) : (
                            <Typography variant="body2" component="p">
                              {passiveLikeUser.passiveLike.name}
                              さんからいいねがありした! <br />
                              プロフィールを確認してみよう!
                            </Typography>
                          )}
                        </LikesCard>
                      </Grid>
                    );
                  }
                )}
              </Grid>
            </>
          ) : (
            <Grid
              justifyContent="center"
              container
              style={{ marginTop: "3rem" }}
            >
              <Typography component="p" variant="body2" color="textSecondary">
                現在いいねをしてくれた相手はいません。
                <br />
                いいと思った相手をこちらからいいねしてみましょう!
              </Typography>
            </Grid>
          )}
        </Grid>
      ) : (
        <CircularProgress color="inherit" />
      )}
      <ActiveLikeUsersDialog
        open={activeLikeUserDialogOpen}
        onClose={() => setActiveLikeUserDialogOpen(false)}
      >
        {activeLikeUsers.length > 0 ? (
          activeLikeUsers.map(
            (activeLikeUser: ActiveLikeUser, index: number) => {
              return (
                <div key={index}>
                  <ActiveLikeUsersList
                    userName={activeLikeUser.activeLike.name}
                    userImage={activeLikeUser.activeLike.image.url}
                    id={activeLikeUser.activeLike.id}
                    matchingState={
                      activeLikeUser.isMatched ? "マッチング中" : ""
                    }
                  />
                </div>
              );
            }
          )
        ) : (
          <Typography component="p" variant="body2" color="textSecondary">
            現在こちらからいいねをした相手はいません。
            <br />
            いいと思った相手をこちらからいいねしてみましょう!
          </Typography>
        )}
      </ActiveLikeUsersDialog>
    </>
  );
});

export default Likes;
