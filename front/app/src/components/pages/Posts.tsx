import React, { useContext, useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
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
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";

import { CreatePostFormData, Post } from "../../interfaces";
import { createPost, getPosts } from "../../lib/api/post";
import { fields } from "../../data/fields";
import { Link, useHistory } from "react-router-dom";
import AlertMessage from "../utils/AlertMessage";
import { AuthContext } from "../../App";

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

  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  const [post, setPost] = useState<Post>(inisialState);
  const [posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [postDetailOpen, setPostDetailOpen] = useState<boolean>(false);
  const [postField, setPostField] = useState<number>();
  const [content, setContent] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState(false);
  const [createPostFormOpen, setCreatePostFormOpen] = useState(false);
  const [update, setUpdata] = useState<boolean>(false);

  const createFormData = (): CreatePostFormData => {
    const formData = new FormData();

    formData.append("userId", String(currentUser.id));
    formData.append("content", content);
    formData.append("postField", String(postField));

    return formData;
  };

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

  //Post投稿機能
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = createFormData();

    try {
      const res = await createPost(data);

      if (res?.status === 200) {
        setCreatePostFormOpen(false);
        history.push("/posts");

        setContent("");
        setPostField(0);

        console.log("Create post successfully!");
      } else {
        setAlertMessageOpen(true);
      }
    } catch (err) {
      console.log(err);
      setAlertMessageOpen(true);
    }
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
          <>
            <Button
              variant="contained"
              onClick={() => setCreatePostFormOpen(true)}
              style={{ marginBottom: 30, width: "30%" }}
            >
              新しく投稿する
            </Button>
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
                          <CardHeader
                            avatar={<Avatar src={post.image.url} />}
                          />
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
          </>
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
      <form noValidate autoComplete="off">
        <Dialog
          open={createPostFormOpen}
          keepMounted
          onClose={() => setCreatePostFormOpen(false)}
        >
          <DialogTitle style={{ textAlign: "center" }}>新しい投稿</DialogTitle>
          <DialogContent>
            <FormControl variant="outlined" margin="dense" fullWidth>
              <InputLabel id="demo-simple-select-outlined-label">
                分野
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={postField}
                onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                  setPostField(e.target.value as number)
                }
                label="分野"
              >
                {fields.map((field, index) => (
                  <MenuItem key={index} value={index}>
                    {field}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              placeholder="140文字以内で書いてください。"
              variant="outlined"
              multiline
              fullWidth
              label="勉強したことや教わりたいこと"
              rows="6"
              value={content}
              margin="dense"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setContent(e.target.value);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit} color="secondary">
              送信
            </Button>
          </DialogActions>
        </Dialog>
      </form>
      <AlertMessage // エラーが発生した場合はアラートを表示
        open={alertMessageOpen}
        setOpen={setAlertMessageOpen}
        severity="error"
        message="投稿に失敗しました。"
      />
    </>
  );
};

export default Posts;
