import React from "react";
import DynamicTable from "./table";

const TableExample = () => {
  const columns = ["Name", "Age", "Email" , "expenses"];

  const data = [
    {
      Name: "John Doe",
      Age: 25,
      Email: "john.doe@example.com",
      buttons: [
        { label: "Edit", action: "edit" },
        { label: "Delete", action: "delete" },
        { label: "Delete", action: "delete" },
      ],
    },
    {
      Name: "Jane Smith",
      Age: 30,
      Email: "jane.smith@example.com",
      expenses : "$123123" , 
      buttons: [{ label: "View", action: "view" }],
    },
    {
        Name: "Jane Smith",
        Age: 30,
        Email: "jane.smith@example.com",
        expenses : "$123123" , 
        buttons: [{ label: "View", action: "view" }],
      },
      {
        Name: "Jane Smith",
        Age: 30,
        Email: "jane.smith@example.com",
        expenses : "$123123" , 
        buttons: [{ label: "View", action: "view" }],
      },
      {
        Name: "Jane Smith",
        Age: 30,
        Email: "jane.smith@example.com",
        expenses : "$123123" , 
        buttons: [{ label: "View", action: "view" }],
      },
      {
        Name: "Jane Smith",
        Age: 30,
        Email: "jane.smith@example.com",
        expenses : "$123123" , 
        buttons: [{ label: "View", action: "view" }],
      },
      {
        Name: "Jane Smith",
        Age: 30,
        Email: "jane.smith@example.com",
        expenses : "$123123" , 
        buttons: [{ label: "View", action: "view" }],
      },
      {
        Name: "Jane Smith",
        Age: 30,
        Email: "jane.smith@example.com",
        expenses : "$123123" , 
        buttons: [{ label: "View", action: "view" }],
      },
      {
        Name: "Jane Smith",
        Age: 30,
        Email: "jane.smith@example.com",
        expenses : "$123123" , 
        buttons: [{ label: "View", action: "view" }],
      },
      {
        Name: "Jane Smith",
        Age: 30,
        Email: "jane.smith@example.com",
        expenses : "$123123" , 
        buttons: [{ label: "View", action: "view" }],
      },
  ];

  const handleButtonClick = (button, row) => {
    console.log(`Button clicked: ${button.action}`, row);
    // Add your logic for button actions here
  };

  return (
    <div>
      <DynamicTable
        columns={columns}
        data={data}
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default TableExample;