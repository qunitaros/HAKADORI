import Cookies from "js-cookie";
import { useState } from "react";
import { SignInData, User } from "../../interfaces/index";
import { getCurrentUser, signIn } from "../api/auth";
import { useHistory } from "react-router-dom";

const useCurrentUser = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const [guestUser, setGuestUser] = useState<boolean>(false);
  const [guestAlertMessageOpen, setGuestAlertMessageOpen] =
    useState<boolean>(false);

  // 認証済みのユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();
      console.log(res);

      if (res?.status === 200) {
        if (res?.data.status === 200) {
          setIsSignedIn(true);
          setCurrentUser(res?.data.currentUser);
        } else {
          console.log(res?.data.status);
        }
      } else {
        console.log("No current user");
      }
    } catch (err) {
      setIsSignedIn(false);
      console.log(err);
    }

    setLoading(false);
  };

  const guestLogin = async () => {
    const data: SignInData = {
      email: "guest@example.com",
      password: "hogehoge",
    };

    try {
      const res = await signIn(data);
      console.log(res);

      if (res.status === 200) {
        // 成功した場合はCookieに各値を格納
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        setGuestUser(true);

        history.push("/home");
        console.log("Signed in successfully!");
      } else {
        setGuestAlertMessageOpen(true);
      }
    } catch (err) {
      console.log(err);
      setGuestAlertMessageOpen(true);
    }
  };

  return {
    loading,
    setLoading,
    isSignedIn,
    setIsSignedIn,
    currentUser,
    setCurrentUser,
    handleGetCurrentUser,
    guestLogin,
    guestUser,
    guestAlertMessageOpen,
    setGuestAlertMessageOpen,
  };
};

export default useCurrentUser;
