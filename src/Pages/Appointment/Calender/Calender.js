import React from 'react';
import isWeekend from "date-fns/isWeekend";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import TextField from "@mui/material/TextField";


const Calender = () => {
    const [value, setValue] = React.useState(new Date());
    console.log(value)
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          // orientation="landscape"
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
};

export default Calender;