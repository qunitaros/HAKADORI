import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import { fields } from "../../data/fields";
import { CreatePostFormData, Post } from "../../interfaces";
import { createPost, getPosts } from "../api/post";

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

const usePost = () => {
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

  // 分野
  const CreatePostField = (post: Post): string => {
    return fields[post.postField || 0];
  };

  return {
    post,
    setPost,
    posts,
    loading,
    postDetailOpen,
    postField,
    setPostField,
    content,
    setContent,
    alertMessageOpen,
    setAlertMessageOpen,
    setPostDetailOpen,
    createPostFormOpen,
    setCreatePostFormOpen,
    handleGetPosts,
    handleSubmit,
    CreatePostField,
  };
};

export default usePost;
