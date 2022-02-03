import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  imageUploadBtn: {
    textAlign: "right",
  },
  input: {
    display: "none",
  },
}));

interface PhotoCameraIconProps {
  onChange: any;
}

const PhotoCameraIcon = ({ onChange }: PhotoCameraIconProps) => {
  const classes = useStyles();
  return (
    <div className={classes.imageUploadBtn}>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={onChange}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="secondary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
};

export default PhotoCameraIcon;
