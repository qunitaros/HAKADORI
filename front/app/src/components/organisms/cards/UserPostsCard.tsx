import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Theme, makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import OpenPostButton from "../../atoms/buttons/OpenPostButton";
import PostsContent from "../../atoms/contents/PostsContent";
import PostField from "../../atoms/contents/PostField";
import PostDeleteButton from "../../atoms/buttons/PostDeleteButton";

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
  onClickOpen: () => void;
  postField: string;
  id: number;
  useable: boolean;
}

const UserPostsCard = ({
  postContent,
  onClickOpen,
  postField,
  id,
  useable,
}: PostsCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <PostField postField={postField} />
        <Divider />
        <PostsContent>{postContent}</PostsContent>
        {!useable ? <PostDeleteButton id={id} /> : <></>}
        <OpenPostButton onClick={onClickOpen}>詳しく見る</OpenPostButton>
      </CardContent>
    </Card>
  );
};

export default UserPostsCard;
