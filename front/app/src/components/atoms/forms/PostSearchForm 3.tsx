import React, { useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Checkbox from "@mui/material/Checkbox";
import { fields } from "../../../data/fields";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (
  name: string,
  personName: readonly string[],
  theme: Theme
) => {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const PostSearchForm = () => {
  const theme = useTheme();
  const [postField, setPostField] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof postField>) => {
    const {
      target: { value },
    } = event;
    setPostField(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 400 }}>
        <InputLabel id="demo-multiple-chip-label">分野で絞り込む</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={postField}
          onChange={handleChange}
          input={
            <OutlinedInput id="select-multiple-chip" label="分野で絞り込む" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {fields.map((field: string, index: number) => (
            <MenuItem
              key={index}
              value={field}
              style={getStyles(field, postField, theme)}
            >
              <Checkbox checked={postField.indexOf(field) > -1} />
              {field}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default PostSearchForm;
