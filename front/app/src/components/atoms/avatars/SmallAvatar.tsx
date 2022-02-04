import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { AuthContext } from "../../../App";

interface SmallAvatarProps {
  id: number;
  imageUrl: string;
}

const SmallAvatar = ({ id, imageUrl }: SmallAvatarProps) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Link to={id === currentUser.id ? "home" : `user/${id}`}>
      <CardHeader avatar={<Avatar src={imageUrl} />} />
    </Link>
  );
};
export default SmallAvatar;
