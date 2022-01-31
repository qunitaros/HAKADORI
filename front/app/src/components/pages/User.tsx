import React, { useEffect, useState } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { getUser } from "../../lib/api/users";
import { User as UserData, UserPost } from "../../interfaces";
import { RouteComponentProps } from "react-router-dom";
import { prefectures } from "../../data/prefectures";
import { dayOffs } from "../../data/dayOffs";
import { fields } from "../../data/fields";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  userCard: {
    width: "50%",
    maxWidth: "460px",
    minWidth: "200px",
  },
  imageUploadBtn: {
    textAlign: "right",
  },
  input: {
    display: "none",
  },
  box: {
    marginBottom: "1.5rem",
  },
  preview: {
    width: "100%",
  },
  title: {
    fontSize: 14,
  },
  post: {
    marginBottom: 12,
  },
  postCard: {
    height: "260px",
  },
  container: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
}));

type UserProps = RouteComponentProps<{ id: string }>;

const User: React.FC<UserProps> = (props) => {
  const classes = useStyles();

  const initialUserState: UserData = {
    id: 0,
    uid: "",
    provider: "",
    email: "",
    name: "",
    image: {
      url: "",
    },
    gender: 0,
    birthday: "",
    profile: "",
    prefecture: 1,
    field: 0,
    dayOff: 0,
    allowPasswordChange: true,
  };

  const initialUserPostState: UserPost = {
    id: 0,
    postField: 0,
    content: "",
    userId: 0,
  };

  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserData>(initialUserState);
  const [userPosts, setUserPosts] = useState<UserPost[] | undefined>([]);
  const [userPost, setUserPost] = useState<UserPost>(initialUserPostState);
  const [postDetailOpen, setPostDetailOpen] = useState<boolean>(false);

  const id = parseInt(props.match.params.id);

  const handleGetUser = async () => {
    try {
      const res = await getUser(id);
      if (res?.status === 200) {
        setUser(res?.data.user);
        setUserPosts(res?.data.posts);
        console.log(res.data.posts);
      } else {
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //生年月日から年齢を計算する (年齢 = floor(今日-誕生日)/ 10000)
  const UserAge = (): number | void => {
    const birthday = user?.birthday.toString().replace(/-/g, "") || "";
    if (birthday.length !== 8) return;

    const date = new Date();
    const today =
      date.getFullYear() +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      ("0" + date.getDate()).slice(-2);

    return Math.floor((parseInt(today) - parseInt(birthday)) / 10000);
  };

  // 都道府県
  const UserPrefecture = (): string => {
    return prefectures[(user.prefecture || 0) - 1];
  };

  // 勉強分野
  const UserField = (): string => {
    return fields[user.field || 0];
  };

  // 休日
  const UserDayOff = (): string => {
    return dayOffs[user.dayOff || 0];
  };

  return (
    <>
      {!loading ? (
        <Grid container justifyContent="center">
          <Card className={classes.userCard}>
            <CardContent>
              <Grid container justifyContent="center">
                <Grid item>
                  <Avatar
                    alt="avatar"
                    src={user.image.url}
                    className={classes.avatar}
                  />
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item style={{ marginTop: "1.5rem" }}>
                  <Typography variant="body1" component="p" gutterBottom>
                    {user.name} <br />
                    {UserAge()}歳（{UserPrefecture()}) <br />
                    勉強中:{UserField()} <br />
                    休日:{UserDayOff()}
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
                  {user.profile ? (
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {user.profile}
                    </Typography>
                  ) : (
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      よろしくお願いします。
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {userPosts?.length > 0 ? (
            <Grid
              container
              justifyContent="center"
              spacing={3}
              className={classes.container}
            >
              {userPosts?.map((userPost: UserPost, index: number) => {
                return (
                  <Grid key={index} item xs={4}>
                    <Card
                      variant="outlined"
                      className={classes.postCard}
                      style={{
                        backgroundColor: "#cebc86",
                        color: "inhedit",
                        opacity: "0.5",
                      }}
                    >
                      <CardContent>
                        <CardMedia style={{ height: "150px" }} />
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          {userPost.postField}
                        </Typography>
                        <Typography variant="h5" component="h2">
                          {userPost.content}
                        </Typography>
                        <Typography
                          className={classes.post}
                          color="textSecondary"
                        >
                          {userPost.content}
                        </Typography>
                        <Typography variant="body2" component="p">
                          ニャースニャース
                        </Typography>
                      </CardContent>
                    </Card>
                    <Grid
                      container
                      justifyContent="center"
                      style={{ marginTop: "0.2rem" }}
                    >
                      <Button
                        size="small"
                        onClick={() => {
                          setUserPost(userPost);
                          setPostDetailOpen(true);
                        }}
                      >
                        詳しく見る
                      </Button>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      ) : (
        <></>
      )}
      <Dialog
        open={postDetailOpen}
        keepMounted
        onClose={() => setPostDetailOpen(false)}
      >
        <DialogContent>
          <Grid container justifyContent="center">
            <Grid item style={{ marginTop: "1rem" }}>
              <Typography
                variant="body1"
                component="p"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                {userPost.content}
              </Typography>
              <Divider />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default User;
