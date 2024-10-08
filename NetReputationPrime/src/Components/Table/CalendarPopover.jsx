// CalendarPopover.js
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { IconButton, Popover } from "@mui/material";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalendarPopover = ({
  selectedDate,
  onDateChange,
  anchorEl,
  open,
  onClose,
  rowIndex,
  handleOpen,
}) => {
  return (
    <>
      <IconButton onClick={(event) => handleOpen(event, rowIndex)}>
        <CalendarTodayIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <DatePicker selected={selectedDate} onChange={onDateChange} inline />
      </Popover>
    </>
  );
};

export default CalendarPopover;
