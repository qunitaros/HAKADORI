import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

interface ActiveLikeUsersListProps {
  userImage: string;
  userName: string;
  matchingState: string;
  id: number;
}

const ActiveLikeUsersList = ({
  userName,
  matchingState,
  userImage,
  id,
}: ActiveLikeUsersListProps) => {
  return (
    <>
      <ListItem button>
        <ListItemAvatar>
          <Avatar
            alt={userName}
            src={userImage}
            component={Link}
            to={`user/${id}`}
          />
        </ListItemAvatar>
        <ListItemText primary={userName} secondary={matchingState} />
      </ListItem>
      <Divider />
    </>
  );
};

export default ActiveLikeUsersList;
