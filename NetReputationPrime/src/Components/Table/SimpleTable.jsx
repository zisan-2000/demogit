import React, { useState } from "react";
import ActionButtons from "./ActionButtons";
import ScheduleModal from "./ScheduleModal";
import TableContainerComponent from "./TableContainerComponent";

const SimpleTable = ({ columns, data, onItemView }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCalendarIndex, setOpenCalendarIndex] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleRowSelect = (row) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(row)
        ? prevSelected.filter((selectedRow) => selectedRow !== row)
        : [...prevSelected, row],
    );
  };

  const handleScheduleClick = () => {
    setShowScheduleModal(true);
  };

  const handleCloseModal = () => {
    setShowScheduleModal(false);
  };

  const csvHeaders = columns.map((col) => ({
    label: col.Header,
    key: col.accessor,
  }));

  const csvData = selectedRows.length > 0 ? selectedRows : data;

  return (
    <>
      <div className="overflow-x-auto">
        <TableContainerComponent
          columns={columns}
          data={data}
          onItemView={onItemView}
          selectedRows={selectedRows}
          handleRowSelect={handleRowSelect}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleCalendarOpen={(event, rowIndex) =>
            setAnchorEl(event.currentTarget) || setOpenCalendarIndex(rowIndex)
          }
          openCalendarIndex={openCalendarIndex}
          anchorEl={anchorEl}
          handleCalendarClose={() =>
            setAnchorEl(null) || setOpenCalendarIndex(null)
          }
        />
      </div>

      <ActionButtons
        csvData={csvData}
        csvHeaders={csvHeaders}
        handleScheduleClick={handleScheduleClick}
      />

      <ScheduleModal
        showScheduleModal={showScheduleModal}
        handleCloseModal={handleCloseModal}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
    </>
  );
};

export default SimpleTable;
