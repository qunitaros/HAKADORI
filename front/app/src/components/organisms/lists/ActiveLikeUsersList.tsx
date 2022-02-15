import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

interface ActiveLikeUsersListProps {
  userImage: string;
  userName: string;
  matchingState: string;
}

const ActiveLikeUsersList = ({
  userName,
  matchingState,
  userImage,
}: ActiveLikeUsersListProps) => {
  return (
    <>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt={userName} src={userImage} />
        </ListItemAvatar>
        <ListItemText primary={userName} secondary={matchingState} />
      </ListItem>
      <Divider />
    </>
  );
};

export default ActiveLikeUsersList;
