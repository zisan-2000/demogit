const TableData = (activeItemTab) => {
  const data = {
    BBC: [
      {
        col1: "BBC - Row 1 Data",
        col2: "Row 1 Info",
        col3: "demo",
        col4: "2024-10-01",
        col5: "News",
        col6: "Public",
      },
      {
        col1: "BBC - Row 2 Data",
        col2: "Row 2 Info",
        col3: "demo",
        col4: "2024-10-02",
        col5: "Politics",
        col6: "Public",
      },
    ],
    "Marques Brownlee": [
      {
        col1: "Marques Brownlee - Row 1 Data",
        col2: "Row 1 Info",
        col3: "demo",
        col4: "2024-09-30",
        col5: "Technology",
        col6: "Public",
      },
      {
        col1: "Marques Brownlee - Row 2 Data",
        col2: "Row 2 Info",
        col3: "demo",
        col4: "2024-09-29",
        col5: "Tech Review",
        col6: "Public",
      },
    ],
    Bloomberg: [
      {
        col1: "Bloomberg - Row 1 Data",
        col2: "Row 1 Info",
        col3: "demo",
        col4: "2024-09-28",
        col5: "Finance",
        col6: "Public",
      },

      {
        col1: "Bloomberg - Row 2 Data",
        col2: "Row 2 Info",
        col3: "demo",
        col4: "2024-09-27",
        col5: "Economics",
        col6: "Public",
      },
    ],
  };

  // Return the data for the active tab
  return data[activeItemTab] || [];
};

export default TableData;
