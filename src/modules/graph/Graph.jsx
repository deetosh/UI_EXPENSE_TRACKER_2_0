// import { useState, useEffect } from "react";
// import "./Graph.css";
// import { FaChevronDown } from "react-icons/fa"; // Import dropdown icon

// const Graph = () => {
//     const [timeFrame, setTimeFrame] = useState("weekly");
//     const [expenses, setExpenses] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

//     const fetchExpenses = async (period) => {
//         setIsLoading(true);
//         try {
//             const response = await fetch(`https://api.example.com/expenses/${period}`);
//             if (!response.ok) throw new Error("Failed to fetch");
//             const data = await response.json();
//             setExpenses(data);
//             setError(null);
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchExpenses(timeFrame);
//     }, [timeFrame]);

//     const handleTimeframeChange = (value) => {
//         setTimeFrame(value);
//         setIsDropdownOpen(false); // Close dropdown after selection
//     };

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
//     };

//     return (
//         <div className="expense-container">
//             <div className="dropdown-container">
//                 <div className="custom-dropdown" onClick={toggleDropdown}>
//                     <span>{timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)}</span>
//                     <FaChevronDown className="dropdown-icon" /> {/* Dropdown button */}
//                 </div>

//                 {/* Custom Dropdown Menu */}
//                 {isDropdownOpen && (
//                     <div className={`custom-dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
//                         <div
//                             className="dropdown-item"
//                             onClick={() => handleTimeframeChange("weekly")}
//                         >
//                             Weekly
//                         </div>
//                         <div
//                             className="dropdown-item"
//                             onClick={() => handleTimeframeChange("monthly")}
//                         >
//                             Monthly
//                         </div>
//                     </div>
//                 )}
//             </div>

//             {isLoading && <div>Loading expenses...</div>}
//             {error && <div className="error">Error: {error}</div>}

//             {!isLoading && !error && (
//                 <div className="expenses-list">
//                     <h2>{timeFrame.charAt(0).toUpperCase() + timeFrame.slice(1)} Expenses</h2>
//                     <ul>
//                         {expenses.map((expense) => (
//                             <li key={expense.id}>
//                                 {expense.name}: ${expense.amount}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Graph;

// import React from 'react';
// import { useState, useEffect } from "react";
// // import "./Graph.css";


// // Import your LineChart component from your charting library
// // For demonstration, we'll assume a LineChart component is available
// import { LineChart } from '@mui/x-charts';

// // const LineChartWrapper = ({ dataObjects }) => {
// //   // Extract x-axis (keys) and y-axis (values) from the data objects.
// //   // Assuming each object has a single key-value pair.
// // //   const xData = dataObjects.map((item) => {
// // //     const key = Object.keys(item)[0];
// // //     // Convert the key to a number if necessary
// // //     return key;
// // //   });
// //   const xData = dataObjects.map((item) => Object.values(item)[0]);
// //   const yData = dataObjects.map((item) => Object.values(item)[1]);
// //   console.log(xData);
// //     console.log(yData);
// //   return (
// //     <LineChart
// //   xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
// //   series={[
// //     {
// //       data: [2, 5.5, 2, 8.5, 1.5, 5],
// //     },
// //   ]}
// //   width={500}
// //   height={300}
// // />
// //   );
// // };

// // export default LineChartWrapper;


// const LineChartWrapper = ({ dataObjects }) => {
//     // Function to format a date string (adjust the formatting as needed)
//     const formatDate = (dateStr) => {
//       const date = new Date(dateStr);
//       // For example, using toLocaleDateString to format the date
//       return date.toLocaleDateString();
//     };
  
//     // Extract and format x-axis (dates) and y-axis (values) from the data objects.
//     const xData = dataObjects.map((item) => {
//       // Expecting the key to be a date string
//       const key = Object.values(item)[0];
//       return formatDate(key);
//     });
  
//     const yData = dataObjects.map((item) => Object.values(item)[1]);
  
//     return (
//     <LineChart
//         xAxis={[{ data: ["1/10/20", "2", 3, 5, 8, 10] }]}
//         series={[
//             {
//             data: [2, 5.5, 2, 8.5, 1.5, 5],
//             },
//         ]}
//         width={500}
//         height={300}
//     />
//     );
//   };
  
//   export default LineChartWrapper;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', value: 400 },
//   { name: 'Feb', value: 300 },
//   { name: 'Mar', value: 200 },
//   { name: 'Apr', value: 278 },
//   { name: 'May', value: 189 },
// ];

const MyLineChart = ({dataObjects}) => {
  let max = 0;
  // find max amount in dataObjects
  dataObjects.forEach((item) => {
    if(item.amount > max) {
      max = Number(item.amount);
    }
  });
  console.log(max);
  
  return (
  <ResponsiveContainer width="100%" height="100%">
  <LineChart width="100%" height="100%" data={dataObjects} margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}>
    <XAxis dataKey="date" 
      domain={['dataMin', 'dataMax']}
      padding={{ right: 10 }}
    />
    <YAxis dataKey="amount"
      domain={[0, max]}
      padding={{ top: 10}}
    />
    <Tooltip />
    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="amount" stroke="#493971" strokeWidth={3} dot={{r:5}} activeDot={{ r: 10 }}/>
  </LineChart>
  </ResponsiveContainer>
);}

export default MyLineChart;
