import Cookies from "js-cookie";
import { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../App";
import { dayOffs } from "../../data/dayOffs";
import { fields } from "../../data/fields";
import { prefectures } from "../../data/prefectures";
import { UpdateUserFormData } from "../../interfaces";
import { signOut } from "../api/auth";
import { updateUser } from "../api/users";

const useHome = () => {
  const { isSignedIn, setIsSignedIn, currentUser, setCurrentUser } =
    useContext(AuthContext);
  const history = useHistory();

  const [editFormOpen, setEditFormOpen] = useState<boolean>(false);
  const [name, setName] = useState<string | undefined>(currentUser?.name);
  const [prefecture, setPrefecture] = useState<number | undefined>(
    currentUser?.prefecture
  );
  const [profile, setProfile] = useState<string | undefined>(
    currentUser?.profile
  );
  const [field, setField] = useState<number | undefined>(currentUser?.field);
  const [dayOff, setDayOff] = useState<number | undefined>(currentUser?.dayOff);
  const [image, setImage] = useState<string>("");
  const [preview, setPreview] = useState<string>("");

  // アップロードした画像の情報を取得
  const uploadImage = useCallback((e) => {
    const file = e.target.files[0];
    setImage(file);
  }, []);

  //画像プレビュー
  const previewImage = useCallback((e) => {
    const file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
  }, []);

  //生年月日から年齢を計算する (年齢 = floor(今日-誕生日)/ 10000)
  const currentUserAge = (): number | void => {
    const birthday = currentUser?.birthday.toString().replace(/-/g, "") || "";
    if (birthday.length !== 8) return;

    const date = new Date();
    const today =
      date.getFullYear() +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      ("0" + date.getDate()).slice(-2);

    return Math.floor((parseInt(today) - parseInt(birthday)) / 10000);
  };

  // 都道府県
  const currentUserPrefecture = (): string => {
    return prefectures[(currentUser?.prefecture || 0) - 1];
  };

  // 勉強分野
  const currentUserField = (): string => {
    return fields[currentUser?.field || 0];
  };

  // 休日
  const currentUserDayOff = (): string => {
    return dayOffs[currentUser?.dayOff || 0];
  };

  const createFormData = (): UpdateUserFormData => {
    const formData = new FormData();

    formData.append("name", name || "");
    formData.append("prefecture", String(prefecture));
    formData.append("profile", profile || "");
    formData.append("field", String(field));
    formData.append("dayOff", String(dayOff));
    formData.append("image", image);

    return formData;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const data = createFormData();

    try {
      const res = await updateUser(currentUser?.id, data);
      console.log(res);

      if (res.status === 200) {
        setEditFormOpen(false);
        setCurrentUser(res.data.user);
      } else {
        console.log(res.data.message);
      }
    } catch (err) {
      console.log(err);
      console.log("Failed in updating user!");
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        // Cookieから各情報を削除
        Cookies.remove("_access_token");
        Cookies.remove("_client");
        Cookies.remove("_uid");

        setIsSignedIn(false);
        history.push("/signin");

        console.log("Succeeded in sign out");
      } else {
        console.log("Failed in sign out");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    isSignedIn,
    editFormOpen,
    setEditFormOpen,
    name,
    setName,
    prefecture,
    setPrefecture,
    profile,
    setProfile,
    field,
    setField,
    dayOff,
    setDayOff,
    image,
    setImage,
    preview,
    setPreview,
    uploadImage,
    previewImage,
    currentUserAge,
    currentUserPrefecture,
    currentUserField,
    currentUserDayOff,
    handleSubmit,
    handleSignOut,
    currentUser,
  };
};

export default useHome;
