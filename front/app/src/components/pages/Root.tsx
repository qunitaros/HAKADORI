import Image from "../image/studyMain.jpeg";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyle = makeStyles({
  image: {
    height: "auto",
    maxHeight: "500px",
    overflow: "hidden",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  footer: {},
});
const Root: React.FC = () => {
  const classes = useStyle();
  return (
    <>
      <div>
        <img src={Image} className={classes.image} alt="backgroundImage" />
      </div>
      <footer></footer>
    </>
  );
};

export default Root;
