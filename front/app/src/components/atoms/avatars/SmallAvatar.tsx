import React from "react";
import { Link } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

interface SmallAvatarProps {
  id: number;
  imageUrl: string;
}

const SmallAvatar = ({ id, imageUrl }: SmallAvatarProps) => {
  return (
    <Link to={`user/${id}`}>
      <CardHeader avatar={<Avatar src={imageUrl} />} />
    </Link>
  );
};
export default SmallAvatar;
