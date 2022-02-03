import { useContext, useState } from "react";
import { AuthContext } from "../../App";
import { Like, User } from "../../interfaces";
import { createLike, getLikes } from "../api/likes";

const useMatching = () => {
  const { currentUser } = useContext(AuthContext);
  const [likedUsers, setLikedUsers] = useState<User[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);
  const [isMatched, setIsMatched] = useState<boolean>(false);

  // いいね一覧を取得
  const handleGetLikes = async () => {
    try {
      const res = await getLikes();

      if (res?.status === 200) {
        setLikedUsers(res?.data.activeLikes);
      } else {
        console.log("No likes");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateLike = async (user: User) => {
    const data: Like = {
      fromUserId: currentUser?.id,
      toUserId: user.id,
    };

    try {
      const res = await createLike(data);

      if (res?.status === 200) {
        setLikes([res.data.like, ...likes]);
        setLikedUsers([user, ...likedUsers]);

        console.log(res?.data.like);
      } else {
        console.log("Failed");
      }

      if (res?.data.isMatched === true) {
        setAlertMessageOpen(true);
        setIsMatched(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 既にいいねされているユーザーかどうかの判定
  const isLikedUser = (userId: number | undefined): boolean => {
    return likedUsers?.some((likedUser: User) => likedUser.id === userId);
  };

  return {
    alertMessageOpen,
    handleGetLikes,
    handleCreateLike,
    isLikedUser,
    isMatched,
  };
};

export default useMatching;
