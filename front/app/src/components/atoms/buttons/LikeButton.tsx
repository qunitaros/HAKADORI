import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

interface LikeButtonProps {
  variant: "text" | "outlined" | "contained";
  onClick: () => void;
  startIcon: boolean;
  children: React.ReactNode;
}

const LikeButton = ({
  variant,
  onClick,
  startIcon,
  children,
}: LikeButtonProps) => {
  return (
    <Grid container justifyContent="center">
      <Button
        variant={variant}
        onClick={onClick}
        color="secondary"
        startIcon={startIcon}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        {children}
      </Button>
    </Grid>
  );
};

export default LikeButton;
