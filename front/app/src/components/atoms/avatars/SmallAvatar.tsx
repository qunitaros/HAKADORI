import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { AuthContext } from "../../../App";

interface SmallAvatarProps {
  id: number;
  imageUrl: string;
}

const SmallAvatar = React.memo(({ id, imageUrl }: SmallAvatarProps) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Link to={id === currentUser.id ? "home" : `user/${id}`}>
      <CardHeader avatar={<Avatar src={imageUrl} />} />
    </Link>
  );
});
export default SmallAvatar;
