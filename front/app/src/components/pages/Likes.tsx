import { useEffect } from "react";
import { useState } from "react";
import { User } from "../../interfaces";
import { getLikes } from "../../lib/api/likes";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
// import { makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     flexGrow: 1,
//     minWidth: 340,
//     maxWidth: "100%",
//   },
//   link: {
//     textDecoration: "none",
//     color: "inherit",
//   },
// }));

const Likes: React.FC = () => {
  // const classes = useStyles();

  const [loading, setLoading] = useState<boolean>(true);
  const [passiveLikeUsers, setPassiveLikeUsers] = useState<User[]>([]);
  //const [activeLikeUsers, setActiveLikeUsers] = useState<User[]>([]);

  // passiveLikeを取得
  const handleGetLikeUsers = async () => {
    try {
      const res = await getLikes();
      if (res?.status === 200) {
        //setActiveLikeUsers(res?.data.activeLikes);
        setPassiveLikeUsers(res?.data.passiveLikes);
        console.log(res?.data.passiveLikes);
      } else {
        console.log(res?.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetLikeUsers();
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
                      <Typography variant="body2" component="p">
                        {passiveLikeUser.name}さんからいいねがありした! <br />
                        プロフィールを確認してみましょう!
                      </Typography>
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
