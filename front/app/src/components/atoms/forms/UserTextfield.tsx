import React from "react";
import TextField from "@mui/material/TextField";

interface UserTextfieldProps {
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  rows?: string;
  autoComplete?: string;
  onChange: any;
}

const UserTextField = React.memo(
  ({
    label,
    type,
    value,
    placeholder,
    rows,
    autoComplete,
    onChange,
  }: UserTextfieldProps) => {
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

export default UserTextField;
