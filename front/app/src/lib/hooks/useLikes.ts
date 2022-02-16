import { useState, useContext } from "react";
import { AuthContext } from "../../App";
import { ActiveLikeUser, Like, PassiveLikeUser, User } from "../../interfaces";
import { createLike, getLikes } from "../api/likes";

const useLikes = () => {
  const { currentUser } = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(true);
  const [passiveLikeUsers, setPassiveLikeUsers] = useState<PassiveLikeUser[]>(
    []
  );
  const [activeLikeUsers, setActiveLikeUsers] = useState<ActiveLikeUser[]>([]);
  const [likedUsers, setLikedUsers] = useState<User[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);
  const [matchingMessageOpen, setMatchingMessageOpen] =
    useState<boolean>(false);
  const [matchingDialogOpen, setMatchingDialogOpen] = useState<boolean>(false);
  const [activeLikeUserDialogOpen, setActiveLikeUserDialogOpen] =
    useState<boolean>(false);

  const [matchingCount, setMatchingCount] = useState<number>(0);
  const [isMatched, setIsMatched] = useState<boolean>(false);

  // passiveLike,activeLikeを取得
  const handleGetLikeUsers = async () => {
    try {
      const res = await getLikes();
      if (res?.status === 200) {
        setPassiveLikeUsers(res?.data.passiveLikes);
        setActiveLikeUsers(res?.data.activeLikes);

        if (res?.data.matchingCount > 0) {
          setMatchingCount(res?.data.matchingCount);
          setMatchingDialogOpen(true);
        }
      } else {
        console.log(res?.data);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  //いいねの生成
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
        setMatchingMessageOpen(true);
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
    loading,
    likes,
    matchingMessageOpen,
    setMatchingMessageOpen,
    isMatched,
    setIsMatched,
    matchingDialogOpen,
    setMatchingDialogOpen,
    matchingCount,
    passiveLikeUsers,
    handleGetLikeUsers,
    handleCreateLike,
    isLikedUser,
    likedUsers,
    setLikedUsers,
    activeLikeUsers,
    setActiveLikeUsers,
    activeLikeUserDialogOpen,
    setActiveLikeUserDialogOpen,
  };
};

export default useLikes;
