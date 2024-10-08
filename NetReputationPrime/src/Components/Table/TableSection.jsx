import TableData from "../../Data/TableData";
import SimpleTable from "./SimpleTable";

const TableSection = ({ activeItemTab }) => {
  if (!activeItemTab) {
    return null; // Don't render if no active tab
  }

  // Get data for the active tab
  const tableData = TableData(activeItemTab);

  return (
    <div className="sticky top-0 z-20 mt-6 bg-white p-2 sm:p-4 md:p-6">
      <h3 className="text-base font-bold md:text-lg">
        Table for{" "}
        <span className="animate-pulse rounded-full bg-amber-400 p-2 font-bold sm:p-3 md:p-4">
          {activeItemTab} :
        </span>
      </h3>
      <SimpleTable
        columns={[
          {
            Header: "Title",
            accessor: "col1",
          },
          {
            Header: "Description",
            accessor: "col2",
          },
          {
            Header: "Info",
            accessor: "col3",
          },
          {
            Header: "Publication Date",
            accessor: "col4",
          },
          {
            Header: "Category",
            accessor: "col5",
          },
          {
            Header: "Source Type",
            accessor: "col6",
          },
          {
            Header: "Schedule",
            accessor: "schedule",
          },
        ]}
        data={tableData}
      />
    </div>
  );
};

export default TableSection;
