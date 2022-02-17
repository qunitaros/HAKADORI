import { useState } from "react";
import { getLikes } from "../api/likes";
import useCurrentUser from "./useCurrentUser";

const useMatching = () => {
  const { isSignedIn } = useCurrentUser();
  const [matchingDialogOpen, setMatchingDialogOpen] = useState<boolean>(false);
  const [matchingCount, setMatchingCount] = useState<number>(0);

  //マッチングしているユーザー数を取得
  const handleGetMatchingUser = async () => {
    try {
      const res = await getLikes();

      if (res?.status === 200) {
        setMatchingCount(res?.data.matchingCount);
        if (isSignedIn) {
          setMatchingDialogOpen(true);
        }
      } else {
        console.log(res?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    matchingDialogOpen,
    setMatchingDialogOpen,
    matchingCount,
    setMatchingCount,
    handleGetMatchingUser,
  };
};

export default useMatching;
