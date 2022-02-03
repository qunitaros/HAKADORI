import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import SmallAvatar from "../../atoms/avatars/SmallAvatar";
import OpenPostButton from "../../atoms/buttons/OpenPostButton";
import PostField from "../../atoms/contents/PostField";
import PostsContent from "../../atoms/contents/PostsContent";
import PostsUserNameContent from "../../atoms/contents/PostsUserNameContent";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    height: "300px",
    backgroundColor: "#cebc86",
    color: "inhedit",
    opacity: "0.5",
  },
}));

interface PostsCardProps {
  id: number;
  imageUrl: string;
  userName: string;
  postContent: string;
  onClick: () => void;
  postField: string;
}

const PostsCard = ({
  id,
  imageUrl,
  userName,
  postContent,
  onClick,
  postField,
}: PostsCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <SmallAvatar id={id} imageUrl={imageUrl} />
        <PostsUserNameContent>{userName}</PostsUserNameContent>
        <PostField postField={postField} />
        <Divider />

        <PostsContent>{postContent}</PostsContent>
        <OpenPostButton onClick={onClick}>詳しく見る</OpenPostButton>
      </CardContent>
    </Card>
  );
};

export default PostsCard;
