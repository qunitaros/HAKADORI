import React from "react";
import ButtonUnstyled, {
  ButtonUnstyledProps,
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled, Theme } from "@mui/system";
import { Link } from "react-router-dom";

const ButtonRoot = React.forwardRef(
  (props: React.PropsWithChildren<{}>, ref: React.ForwardedRef<any>) => {
    const { children, ...other } = props;

    return (
      <svg width="150" height="50" {...other} ref={ref}>
        <polygon points="0,50 0,0 150,0 150,50" className="bg" />
        <polygon points="0,50 0,0 150,0 150,50" className="borderEffect" />
        <foreignObject x="0" y="0" width="150" height="50">
          <div className="content">{children}</div>
        </foreignObject>
      </svg>
    );
  }
);

const brawn = {
  50: "#efe5ca",
  100: "#faf0e6",
  200: "#faebd7",
  400: "#ffefd5",
  500: "#ffebcd",
  600: "#b8860b",
  800: "#ffdab9",
  900: "#8b4513",
};

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === "light" ? brawn[600] : brawn[100]};
  --hover-color: ${theme.palette.mode === "light" ? brawn[50] : brawn[900]};
  --active-color: ${theme.palette.mode === "light" ? brawn[100] : brawn[800]};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }
  
  & .bg {
    stroke: var(--main-color);
    stroke-width: 1;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: 2px solid ${
      theme.palette.mode === "dark" ? brawn[400] : brawn[200]
    };
    outline-offset: 2px;
  }

  &.${buttonUnstyledClasses.active} { 
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-size: 0.875rem;
      font-family: IBM Plex Sans, sans-serif;
      font-weight: 500;
      line-height: 1.5;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`
);

const SvgButton = React.forwardRef(
  (props: ButtonUnstyledProps, ref: React.ForwardedRef<any>) => {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
  }
);

interface OpenUserButtonProps {
  id: number;
}

const OpenUserButton = ({ id }: OpenUserButtonProps) => {
  return (
    <>
      <Link to={`user/${id}`}>
        <SvgButton>プロフィールを見る</SvgButton>
      </Link>
    </>
  );
};

export default OpenUserButton;
