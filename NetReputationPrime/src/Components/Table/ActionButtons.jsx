import { Button } from "@mui/material";
import { useState } from "react";
import { CSVLink } from "react-csv"; // Import the CSVLink component

const ActionButtons = ({
  csvData,
  csvHeaders,
  handleScheduleClick, // Add a prop for the save schedule click handler
}) => {
  // State to keep track of which button is selected
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  // Handle the button click to select the schedule type
  const handleSelectSchedule = (type) => {
    setSelectedSchedule(type);
    handleScheduleClick(type);
  };

  return (
    <div className="mt-4 flex flex-col justify-end space-y-4">
      <div className="flex justify-end space-x-4">
        <Button variant="contained" color="primary">
          <CSVLink
            data={csvData}
            headers={csvHeaders}
            filename="table_data.csv"
            style={{ textDecoration: "none", color: "white" }}
          >
            Download
          </CSVLink>
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleSelectSchedule("random")}
          disabled={selectedSchedule === "custom"}
        >
          Random Schedule
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleSelectSchedule("custom")}
          disabled={selectedSchedule === "random"}
        >
          Custom Schedule
        </Button>
      </div>

      <div className="mt-4 flex justify-end">
        <Button
          variant="contained"
          color="primary"
          // onClick={() => handleScheduleClick("save")} // Add the click handler for saving the schedule
        >
          Save Schedule
        </Button>
      </div>
    </div>
  );
};

export default ActionButtons;
