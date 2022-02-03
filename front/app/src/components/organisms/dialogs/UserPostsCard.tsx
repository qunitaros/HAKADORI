import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import OpenPostButton from "../../atoms/buttons/OpenPostButton";
import PostsContent from "../../atoms/contents/PostsContent";
import PostField from "../../atoms/contents/PostField";

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    height: "300px",
    backgroundColor: "#cebc86",
    color: "inhedit",
    opacity: "0.5",
  },
}));

interface PostsCardProps {
  postContent: string;
  onClick: () => void;
  postField: string;
}

const UserPostsCard = ({ postContent, onClick, postField }: PostsCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <PostField postField={postField} />
        <Divider />
        <PostsContent>{postContent}</PostsContent>

        <OpenPostButton onClick={onClick}>詳しく見る</OpenPostButton>
      </CardContent>
    </Card>
  );
};

export default UserPostsCard;
