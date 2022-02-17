import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { SignUpContext } from "../../pages/SignUp";
import jaLocale from "date-fns/locale/ja";

const BirthdayForm = React.memo(() => {
  const { birthday, setBirthday } = useContext(SignUpContext);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={jaLocale}>
      <DatePicker
        disableFuture
        label="生年月日"
        openTo="year"
        views={["year", "month", "day"]}
        value={birthday}
        onChange={(newValue) => {
          setBirthday(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
});

export default BirthdayForm;
