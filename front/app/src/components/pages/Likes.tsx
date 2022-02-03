import { useEffect } from "react";
import { User } from "../../interfaces";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import useLikes from "../../lib/hooks/useLikes";
import useMatching from "../../lib/hooks/useMatching";

const Likes: React.FC = () => {
  // const classes = useStyles();

  const { loading, passiveLikeUsers, handleGetLikeUsers } = useLikes();
  const { isMatched } = useMatching();

  useEffect(() => {
    handleGetLikeUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!loading ? (
        passiveLikeUsers.length > 0 ? (
          <Grid container justifyContent="center" spacing={2}>
            {passiveLikeUsers.map((passiveLikeUser: User, index: number) => {
              return (
                <Grid key={index} item xs={4}>
                  <Card
                    variant="outlined"
                    style={{
                      backgroundColor: "#e6e6e6",
                      color: "inhedit",
                      opacity: "0.5",
                    }}
                  >
                    <Link to={`user/${passiveLikeUser.id}`}>
                      <CardHeader
                        avatar={<Avatar src={passiveLikeUser.image.url} />}
                      />
                    </Link>
                    <Divider />
                    <CardContent>
                      {isMatched ? (
                        <Typography
                          variant="body2"
                          component="p"
                          color="secondary"
                        >
                          {passiveLikeUser.name}さんとマッチング中!!
                        </Typography>
                      ) : (
                        <Typography variant="body2" component="p">
                          {passiveLikeUser.name}さんからいいねがありした! <br />
                          プロフィールを確認してみましょう!
                        </Typography>
                      )}
                    </CardContent>
                    <CardActions>
                      <Link to={`user/${passiveLikeUser.id}`}>
                        <Button size="small">プロフィールを見る</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography component="p" variant="body2" color="textSecondary">
            現在いいねをしてくれた相手はいません。
            <br />
            いいと思った相手をこちらからいいねしてみましょう!
          </Typography>
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Likes;
