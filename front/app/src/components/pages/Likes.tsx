import { useEffect } from "react";
import { PassiveLikeUser } from "../../interfaces";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import useLikes from "../../lib/hooks/useLikes";
import LikesCard from "../organisms/cards/LikesCard";

const Likes: React.FC = () => {
  // const classes = useStyles();

  const { loading, passiveLikeUsers, handleGetLikeUsers } = useLikes();

  useEffect(() => {
    handleGetLikeUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading ? (
        passiveLikeUsers.length > 0 ? (
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
        ) : (
          <Typography component="p" variant="body2" color="textSecondary">
            現在いいねをしてくれた相手はいません。
            <br />
            いいと思った相手をこちらからいいねしてみましょう!
          </Typography>
        )
      ) : (
        <CircularProgress color="inherit" />
      )}
    </>
  );
};

export default Likes;
