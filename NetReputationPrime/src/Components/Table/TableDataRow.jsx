import { Checkbox, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import CalendarPopover from "./CalendarPopover";

const TableDataRow = ({
  row,
  columns,
  onItemView,
  handleCalendarOpen,
  openCalendarIndex,
  anchorEl,
  handleCalendarClose,
  selectedDate,
  setSelectedDate,
  rowIndex,
  onRowSelect, // Function to handle row selection
  isSelected, // Boolean to check if row is selected
}) => {
  return (
    <TableRow>
      {/* Checkbox for selecting the row */}
      <TableCell>
        <Checkbox
          checked={isSelected}
          onChange={() => onRowSelect(row)}
          inputProps={{ "aria-label": "select row" }}
        />
      </TableCell>

      {/* Render other table cells */}
      {columns.map((column, colIndex) => (
        <TableCell key={colIndex}>
          {column.accessor === "schedule" ? (
            <CalendarPopover
              selectedDate={selectedDate}
              onDateChange={(date) => setSelectedDate(date)}
              anchorEl={anchorEl}
              open={openCalendarIndex === rowIndex}
              onClose={handleCalendarClose}
              rowIndex={rowIndex}
              handleOpen={handleCalendarOpen}
            />
          ) : (
            <>
              {row[column.accessor]}{" "}
              {column.accessor === "col1" && (
                <IconButton onClick={() => onItemView(row)}></IconButton>
              )}
            </>
          )}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TableDataRow;
