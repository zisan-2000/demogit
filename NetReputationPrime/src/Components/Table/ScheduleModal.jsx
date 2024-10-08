import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Box, Button, IconButton, Modal } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for date picker

const ScheduleModal = ({
  showScheduleModal,
  handleCloseModal,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  return (
    <Modal open={showScheduleModal} onClose={handleCloseModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          outline: 0,
          borderRadius: "8px",
          width: 400,
        }}
      >
        <h2 className="mb-4 text-xl font-semibold">Schedule Data</h2>

        {/* From Date */}
        <div className="mb-4 flex items-center space-x-4">
          <label className="font-bold text-black">From:</label>
          <IconButton>
            <CalendarTodayIcon />
          </IconButton>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)} // Set the start date
            dateFormat="yyyy-MM-dd"
            placeholderText="Select start date"
            className="rounded-md border px-2 py-1"
          />
        </div>

        {/* To Date */}
        <div className="mb-4 flex items-center space-x-4">
          <label className="font-bold text-black">To:</label>
          <IconButton>
            <CalendarTodayIcon />
          </IconButton>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)} // Set the end date
            dateFormat="yyyy-MM-dd"
            placeholderText="Select end date"
            className="rounded-md border px-2 py-1"
          />
        </div>

        {/* Close Button */}
        <Button variant="contained" color="primary" onClick={handleCloseModal}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ScheduleModal;
