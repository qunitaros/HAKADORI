import { useEffect } from "react";
import { ActiveLikeUser, PassiveLikeUser } from "../../interfaces";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import useLikes from "../../lib/hooks/useLikes";
import LikesCard from "../organisms/cards/LikesCard";
import MatchingDialog from "../organisms/dialogs/MatchingDialog";
import ActiveLikeUsersDialog from "../organisms/dialogs/ActiveLikeUsersDialog";
import { User } from "../../interfaces/index";
import ActiveLikeUsersList from "../organisms/lists/ActiveLikeUsersList";

const Likes: React.FC = () => {
  // const classes = useStyles();

  const {
    loading,
    passiveLikeUsers,
    handleGetLikeUsers,
    matchingDialogOpen,
    setMatchingDialogOpen,
    matchingCount,
    activeLikeUsers,
  } = useLikes();

  useEffect(() => {
    handleGetLikeUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <ActiveLikeUsersDialog>
            {activeLikeUsers.length > 0 ? (
              activeLikeUsers.map(
                (activeLikeUser: ActiveLikeUser, index: number) => {
                  return (
                    <div key={index}>
                      <ActiveLikeUsersList
                        userName={activeLikeUser.activeLike.name}
                        userImage={activeLikeUser.activeLike.image.url}
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
          {passiveLikeUsers.length > 0 ? (
            <>
              <Grid container justifyContent="center" spacing={2}>
                {passiveLikeUsers.map(
                  (passiveLikeUser: PassiveLikeUser, index: number) => {
                    return (
                      <Grid key={index} item xs={4}>
                        <LikesCard
                          id={passiveLikeUser.passiveLike.id}
                          imageUrl={passiveLikeUser.passiveLike.image.url}
                        >
                          {passiveLikeUser.isMatched ? (
                            <>
                              <Typography
                                variant="body2"
                                component="p"
                                color="secondary"
                              >
                                {passiveLikeUser.passiveLike.name}
                                さんとマッチングしました! <br />
                                早速メッセージを送ってみよう!
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
              {/* <MatchingDialog
                open={matchingDialogOpen}
                onClose={() => setMatchingDialogOpen(false)}
                matchingCount={matchingCount}
              /> */}
            </>
          ) : (
            <Typography component="p" variant="body2" color="textSecondary">
              現在いいねをしてくれた相手はいません。
              <br />
              いいと思った相手をこちらからいいねしてみましょう!
            </Typography>
          )}
        </>
      ) : (
        <CircularProgress color="inherit" />
      )}
    </>
  );
};

export default Likes;
