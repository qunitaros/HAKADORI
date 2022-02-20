import React from "react";
import TextField from "@mui/material/TextField";

interface PostTextFieldProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  rows?: number;
  autoComplete?: string;
  onChange: any;
}

const PostTextField = React.memo(
  ({
    label,
    type,
    value,
    placeholder,
    rows,
    autoComplete,
    onChange,
  }: PostTextFieldProps) => {
    return (
      <TextField
        variant="outlined"
        required
        fullWidth
        label={label}
        type={type}
        value={value}
        placeholder={placeholder}
        rows={rows}
        margin="dense"
        autoComplete={autoComplete}
        onChange={onChange}
      />
    );
  }
);

export default PostTextField;
