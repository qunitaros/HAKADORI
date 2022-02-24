import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { styled } from "@mui/material/styles";

const StyledButton = styled("div")(() => ({
  textAlign: "right",
}));

const StyledInput = styled("input")(() => ({
  display: "none",
}));

interface PhotoCameraIconProps {
  onChange: any;
}

const PhotoCameraIcon = ({ onChange }: PhotoCameraIconProps) => {
  return (
    <StyledButton>
      <StyledInput
        accept="image/*"
        id="icon-button-file"
        type="file"
        onChange={onChange}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </StyledButton>
  );
};

export default PhotoCameraIcon;
