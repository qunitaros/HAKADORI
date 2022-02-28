import { useCallback, useContext, useState } from "react";
import { AuthContext } from "../../App";
import { fields } from "../../data/fields";
import { CreatePostFormData, Post, UserPost } from "../../interfaces";
import { createPost, getPosts } from "../api/post";

const inisialState: Post = {
  post: {
    id: 0,
    postField: 0,
    content: "",
    userId: 0,
    postImage: {
      url: "",
    },
  },
  user: {
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
  },
};

const usePost = () => {
  const { currentUser } = useContext(AuthContext);

  const [post, setPost] = useState<Post>(inisialState);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [postDetailOpen, setPostDetailOpen] = useState<boolean>(false);
  const [postField, setPostField] = useState<number>();
  const [content, setContent] = useState<string>("");
  const [postImage, setPostImage] = useState<string>("");
  const [postPreview, setPostPreview] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [createPostFormOpen, setCreatePostFormOpen] = useState<boolean>(false);
  const [createSuccessOpen, setCreateSuccessOpen] = useState<boolean>(false);

  const createFormData = (): CreatePostFormData => {
    const formData = new FormData();

    formData.append("userId", String(currentUser?.id));
    formData.append("content", content);
    formData.append("postField", String(postField));
    formData.append("postImage", postImage);

    return formData;
  };

  // Post一覧を取得する
  const handleGetPosts = async () => {
    try {
      const res = await getPosts();

      if (res?.status === 200) {
        setPosts(res?.data.posts);
      } else {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  // アップロードした画像のデータを取得
  const uploadPostImage = useCallback((e) => {
    const file = e.target.files[0];
    setPostImage(file);
  }, []);

  // 画像プレビューを表示
  const previewPostImage = useCallback((e) => {
    const file = e.target.files[0];
    setPostPreview(window.URL.createObjectURL(file));
  }, []);

  //Post投稿機能
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = createFormData();

    try {
      const res = await createPost(data);

      if (res?.status === 200) {
        setCreateSuccessOpen(true);
        setCreatePostFormOpen(false);

        setContent("");
        setPostField(undefined);

        handleGetPosts();

        console.log("Create post successfully!");
      } else {
        setAlertMessageOpen(true);
      }
    } catch (err) {
      console.log(err);
      setAlertMessageOpen(true);
    }
  };

  const iso8601ToDateTime = (iso8601: string) => {
    const date = new Date(Date.parse(iso8601));
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return year + " " + month + "/" + day + " " + hour + ":" + minute;
  };

  // 分野
  const CreatePostField = (post: UserPost): string => {
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
    createSuccessOpen,
    setCreateSuccessOpen,
    setPostDetailOpen,
    createPostFormOpen,
    setCreatePostFormOpen,
    handleGetPosts,
    handleSubmit,
    CreatePostField,
    iso8601ToDateTime,
    postImage,
    setPostImage,
    postPreview,
    setPostPreview,
    uploadPostImage,
    previewPostImage,
  };
};

export default usePost;
