import Cookies from "js-cookie";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import { SignInData } from "../../interfaces";
import { signIn } from "../api/auth";

const useSignIn = () => {
  const history = useHistory();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data: SignInData = {
      email: email,
      password: password,
    };

    try {
      const res = await signIn(data);
      console.log(res);

      if (res.status === 200) {
        // 成功した場合はCookieに各値を格納
        setEmail("");
        setPassword("");
        Cookies.set("_access_token", res.headers["access-token"]);
        Cookies.set("_client", res.headers["client"]);
        Cookies.set("_uid", res.headers["uid"]);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        history.push("/home");
        console.log("Signed in successfully!");
      } else {
        setAlertMessageOpen(true);
      }
    } catch (err) {
      console.log(err);
      setAlertMessageOpen(true);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    alertMessageOpen,
    setAlertMessageOpen,
    handleSubmit,
  };
};

export default useSignIn;
