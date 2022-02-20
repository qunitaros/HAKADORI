import { useState } from "react";
import { fields } from "../../data/fields";
import { prefectures } from "../../data/prefectures";
import { User } from "../../interfaces";
import { getUsers } from "../api/users";

const useUsers = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  // 生年月日から年齢を計算する
  const userAge = (user: User): number | void => {
    const birthday = user.birthday.toString().replace(/-/g, "");
    if (birthday.length !== 8) return;

    const date = new Date();
    const today =
      date.getFullYear() +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      ("0" + date.getDate()).slice(-2);

    return Math.floor((parseInt(today) - parseInt(birthday)) / 10000);
  };

  // 都道府県
  const userPrefecture = (user: User): string => {
    return prefectures[user.prefecture - 1];
  };

  // 科目
  const userField = (user: User): string => {
    return fields[user.field];
  };

  // ユーザー一覧を取得
  const handleGetUsers = async () => {
    try {
      const res = await getUsers();

      if (res?.status === 200) {
        setUsers(res?.data.users);
        console.log(res.data.users);
      } else {
        console.log("No users");
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return {
    loading,
    users,
    userAge,
    userPrefecture,
    userField,
    handleGetUsers,
    dialogOpen,
    setDialogOpen,
  };
};

export default useUsers;
