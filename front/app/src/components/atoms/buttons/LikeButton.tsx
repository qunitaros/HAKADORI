import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

interface LikeButtonProps {
  variant: "text" | "outlined" | "contained";
  onClick: () => void;
  startIcon: any;
  children: React.ReactNode;
  disabled: boolean;
}

const LikeButton = ({
  variant,
  onClick,
  startIcon,
  disabled,
  children,
}: LikeButtonProps) => {
  return (
    <Grid container justifyContent="center">
      <Button
        variant={variant}
        onClick={onClick}
        color="secondary"
        disabled={disabled}
        startIcon={startIcon}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        {children}
      </Button>
    </Grid>
  );
};

export default LikeButton;
