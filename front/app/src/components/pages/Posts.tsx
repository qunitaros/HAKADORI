import React, { useEffect, useState } from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import { Post, User } from "../../interfaces";
import { getPosts } from "../../lib/api/post";
import { fields } from "../../data/fields";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    height: "300px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  postContent: {
    marginBottom: 12,
  },
});

const inisialState: Post = {
  id: 0,
  postField: 0,
  content: "",
  userId: 0,
  userName: "",
  image: {
    url: "",
  },
};

const Posts: React.FC = () => {
  const classes = useStyles();

  const [post, setPost] = useState<Post>(inisialState);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [postDetailOpen, setPostDetailOpen] = useState<boolean>(false);

  // Post一覧を取得する
  const handleGetPosts = async () => {
    try {
      const res = await getPosts();

      if (res?.status === 200) {
        setPosts(res?.data.posts);
        console.log(res.data.posts);
      } else {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  // 学習分野
  const userPostField = (): string => {
    return fields[post.postField];
  };

  return (
    <>
      {!loading ? (
        posts?.length > 0 ? (
          <Grid container justifyContent="center" spacing={2}>
            {posts?.map((post: Post, index: number) => {
              return (
                <Grid key={index} item xs={4}>
                  <Card
                    className={classes.card}
                    variant="outlined"
                    style={{
                      backgroundColor: "#cebc86",
                      color: "inhedit",
                      opacity: "0.5",
                    }}
                  >
                    <CardContent>
                      <Link to={`user/${post.userId}`}>
                        <CardHeader avatar={<Avatar src={post.image.url} />} />
                      </Link>
                      <CardMedia style={{ height: "100px" }} />
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {post.userName}
                      </Typography>
                      <Typography variant="h5" component="h2">
                        {post.content}
                      </Typography>
                      <Typography
                        className={classes.postContent}
                        color="textSecondary"
                      >
                        {post.content}
                      </Typography>
                      <Typography variant="body2" component="p">
                        ニャースニャース
                      </Typography>
                    </CardContent>
                  </Card>
                  <Button
                    size="small"
                    onClick={() => {
                      setPost(post);
                      setPostDetailOpen(true);
                    }}
                  >
                    詳しく見る
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography component="p" variant="body2" color="textSecondary">
            投稿されていません。
          </Typography>
        )
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
                {post.content}
              </Typography>
              <Divider />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Posts;
