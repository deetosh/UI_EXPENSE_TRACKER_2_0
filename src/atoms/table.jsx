import React, { useState } from "react";
import "./table.css"; // Import your CSS file

const DynamicTable = ({ columns, data, onButtonClick, onAddCustomer }) => {
  if(!data || data.length===0)return null;
  const [searchTerm, setSearchTerm] = useState("");
  const [rowsToShow, setRowsToShow] = useState(5);
  const [sortConfig, setSortConfig] = useState({ column: null, order: null });
  const [originalData] = useState([...data]); // Store the original data

  // Function to determine if a column is numeric
  const isNumericColumn = (col) => {
    return data.every((row) => !isNaN(parseFloat(row[col])) && isFinite(row[col]));
  };

  // Sorting function
  const sortData = (dataToSort) => {
    if (!sortConfig.column) return dataToSort;

    if (sortConfig.order === "default") {
      return [...originalData]; // Reset to original order
    }

    return [...dataToSort].sort((a, b) => {
      const aValue = a[sortConfig.column] || "";
      const bValue = b[sortConfig.column] || "";

      if (isNumericColumn(sortConfig.column)) {
        return sortConfig.order === "asc" ? aValue - bValue : bValue - aValue;
      } else {
        return sortConfig.order === "asc"
          ? aValue.toString().localeCompare(bValue.toString())
          : bValue.toString().localeCompare(aValue.toString());
      }
    });
  };

  // Handle sorting selection from dropdown
  const handleSortChange = (column, order) => {
    setSortConfig({ column, order });
  };

  // Filter data based on search input
  const filteredData = data.filter((row) =>
    columns.some(
      (col) =>
        row[col] &&
        row[col].toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sort the filtered data
  const sortedData = sortData(filteredData);

  // Ensure table maintains size (fills empty rows)
  const displayedData = [...sortedData, ...Array(Math.max(0, rowsToShow - sortedData.length)).fill({})];

  return (
    <div className="table-container">
      {/* Controls (Search + Dropdown + Add Customer Button) */}
      <div className="table-controls">
        <div className="table-controls-1">
          <select
            className="row-dropdown"
            value={rowsToShow}
            onChange={(e) => setRowsToShow(Number(e.target.value))}
          >
            <option value={5}>Show 5 rows</option>
            <option value={10}>Show 10 rows</option>
            <option value={15}>Show 15 rows</option>
            <option value={data.length}>Show All</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="add-customer-btn" onClick={onAddCustomer}>
          Add Customer
        </button>
      </div>

      {/* Table */}
      <table className="dynamic-table">
        {/* Table Head */}
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="sortable-header">
                <div className="header-container">
                  {column}
                  <select
                    className="sort-dropdown"
                    onChange={(e) => handleSortChange(column, e.target.value)}
                  >
                    <option value="default">🔄</option>
                    <option value="asc">⬆️</option>
                    <option value="desc">⬇️</option>
                  </select>
                </div>
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {displayedData.slice(0, rowsToShow).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col] || "—"}</td> // Placeholder for empty rows
              ))}
              <td className="buttons_container">
                {row.buttons ? (
                  row.buttons.map((button, btnIndex) => (
                    <button
                      key={btnIndex}
                      className="action-button"
                      onClick={() => onButtonClick(button, row)}
                    >
                      {button.label}
                    </button>
                  ))
                ) : (
                  "—"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;