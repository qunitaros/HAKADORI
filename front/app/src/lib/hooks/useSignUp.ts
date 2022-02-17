import Cookies from "js-cookie";
import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import { SignUpFormData } from "../../interfaces";
import { signUp } from "../api/auth";

const useSignUp = () => {
  const history = useHistory();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [gender, setGender] = useState<number>();
  const [prefecture, setPrefecture] = useState<number>();
  const [birthday, setBirthday] = useState<Date | null>(
    new Date("2000^01^01T00:00:00")
  );
  const [field, setField] = useState<number>();
  const [dayOff, setDayOff] = useState<number>();
  const [image, setImage] = useState<string>("");
  const [preview, setPreview] = useState<string>("");
  const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false);

  // アップロードした画像のデータを取得
  const uploadImage = useCallback((e) => {
    const file = e.target.file[0];
    setImage(file);
  }, []);

  // 画像プレビューを表示
  const previewImage = useCallback((e) => {
    const file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
  }, []);

  // フォームデータを作成
  const createFormData = (): SignUpFormData => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordConfirmation", passwordConfirmation);
    formData.append("gender", String(gender));
    formData.append("prefecture", String(prefecture));
    formData.append("field", String(field));
    formData.append("dayOff", String(dayOff));
    formData.append("birthday", String(birthday));
    formData.append("image", image);

    return formData;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = createFormData();

    try {
      const res = await signUp(data);

      console.log(res);

      if (password === passwordConfirmation) {
        if (res.status === 200) {
          // アカウント作成と同時にサインインさせてしまう
          Cookies.set("_access_token", res.headers["access-token"]);
          Cookies.set("_client", res.headers["client"]);
          Cookies.set("_uid", res.headers["uid"]);

          setIsSignedIn(true);
          setCurrentUser(res.data.data);

          history.push("/home");

          setName("");
          setEmail("");
          setPassword("");
          setPasswordConfirmation("");
          setGender(undefined);
          setPrefecture(undefined);
          setBirthday(null);
          setField(undefined);
          setDayOff(undefined);

          console.log("Signed in successfully!");
        } else {
          setAlertMessageOpen(true);
        }
      } else setAlertMessageOpen(true);
    } catch (err) {
      console.log(err);
      console.log(birthday);
      setAlertMessageOpen(true);
    }
  };
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirmation,
    setPasswordConfirmation,
    prefecture,
    setPrefecture,
    gender,
    setGender,
    birthday,
    setBirthday,
    field,
    setField,
    dayOff,
    setDayOff,
    preview,
    setPreview,
    uploadImage,
    previewImage,
    alertMessageOpen,
    setAlertMessageOpen,
    handleSubmit,
  };
};

export default useSignUp;
