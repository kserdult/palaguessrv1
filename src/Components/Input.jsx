import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { names } from "../data/data";

const Input = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={names}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Champion" />}
      />
    </div>
  );
};

export default Input;
