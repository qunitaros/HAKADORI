import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

interface ActiveLikeUsersListProps {
  userImage: string;
  userName: string;
  matchingState: string;
  id: number;
}

const ActiveLikeUsersList = React.memo(
  ({ userName, matchingState, userImage, id }: ActiveLikeUsersListProps) => {
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
  }
);

export default ActiveLikeUsersList;
