import { useState } from "react";
import { dayOffs } from "../../data/dayOffs";
import { fields } from "../../data/fields";
import { prefectures } from "../../data/prefectures";
import { User as UserData, UserPost } from "../../interfaces/index";
import { deletePost } from "../api/post";
import { getUser } from "../api/users";

const useUser = (props) => {
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
  const [postDeleteConfirm, setPostDeleteConfirm] = useState<boolean>(false);

  const id = parseInt(props.match.params.id);

  const handleGetUser = async () => {
    try {
      const res = await getUser(id);
      if (res?.status === 200) {
        setUser(res?.data.user);
        setUserPosts(res?.data.posts);
        console.log(res.data.posts);
      } else {
        console.log(res?.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleDeletePost = async (id: number) => {
    try {
      const res = await deletePost(id);
      setPostDeleteConfirm(false);
      if (res?.status === 200) {
        handleGetUser();
      } else {
        console.log(res?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //生年月日から年齢を計算する (年齢 = floor(今日-誕生日)/ 10000)
  const userAge = (): number | void => {
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
  const userPrefecture = (): string => {
    return prefectures[(user.prefecture || 0) - 1];
  };

  // 勉強分野
  const userField = (): string => {
    return fields[user.field || 0];
  };

  // 休日
  const userDayOff = (): string => {
    return dayOffs[user.dayOff || 0];
  };

  // 分野
  const CreatePostField = (post: UserPost): string => {
    return fields[post.postField || 0];
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

  return {
    loading,
    user,
    userPosts,
    userPost,
    setUserPost,
    postDetailOpen,
    setPostDetailOpen,
    handleGetUser,
    userAge,
    userDayOff,
    userField,
    userPrefecture,
    CreatePostField,
    handleDeletePost,
    postDeleteConfirm,
    setPostDeleteConfirm,
    iso8601ToDateTime,
  };
};

export default useUser;
