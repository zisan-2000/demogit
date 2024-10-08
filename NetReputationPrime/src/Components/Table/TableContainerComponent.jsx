import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableDataRow from "./TableDataRow";

const TableContainerComponent = ({
  columns,
  data,
  onItemView,
  selectedRows,
  handleRowSelect,
  selectedDate,
  setSelectedDate,
  handleCalendarOpen,
  openCalendarIndex,
  anchorEl,
  handleCalendarClose,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Select</TableCell>
            {columns.map((column, index) => (
              <TableCell key={index} style={{ fontWeight: "bold" }}>
                {column.Header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableDataRow
              key={rowIndex}
              row={row}
              columns={columns}
              onItemView={onItemView}
              handleCalendarOpen={handleCalendarOpen}
              openCalendarIndex={openCalendarIndex}
              anchorEl={anchorEl}
              handleCalendarClose={handleCalendarClose}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              rowIndex={rowIndex}
              onRowSelect={handleRowSelect} // Pass the row selection handler
              isSelected={selectedRows.includes(row)} // Pass whether the row is selected
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableContainerComponent;
