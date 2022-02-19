import React from 'react';
import isWeekend from "date-fns/isWeekend";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import TextField from "@mui/material/TextField";
import { Box } from '@mui/system';


const Calender = ({date, setDate}) => {
    
    return (
      <Box sx={{boxShadow: 3}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            // orientation="landscape"
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={date}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>
    );
};

export default Calender;