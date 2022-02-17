import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

interface PostFormControlProps {
  value: string;
  onChange: any;
  label: string;
  children: React.ReactNode;
}

const PostFormControl = React.memo(
  ({ value, onChange, label, children }: PostFormControlProps) => {
    return (
      <FormControl variant="outlined" margin="dense" fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={onChange}
          label={label}
          defaultValue=""
        >
          {children}
        </Select>
      </FormControl>
    );
  }
);

export default PostFormControl;
