import { useState } from "react";
import { User } from "../../interfaces";
import { getLikes } from "../api/likes";

const useLikes = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [passiveLikeUsers, setPassiveLikeUsers] = useState<User[]>([]);

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
  return { loading, passiveLikeUsers, handleGetLikeUsers };
};

export default useLikes;
