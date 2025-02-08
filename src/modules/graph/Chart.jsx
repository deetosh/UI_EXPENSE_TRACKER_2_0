import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ["#dbcedb", "#8884d8"]

const MyPieChart = ({ dataObjects }) => {
  
  var message="";
  if(dataObjects[0].amount<=0){
    message="Entire Budget Spent";
  }
  
  return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width="90%" height="100%">
        <Pie
          data={dataObjects}
          cx="50%"
          cy="90%"
          startAngle={0}
          endAngle={180}
          innerRadius={120}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={-5}
          dataKey="amount"
        >
        {dataObjects.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[(index) % COLORS.length]} cornerRadius={index === 1 ? 15 : 0} />
        ))}
        </Pie>
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight="bold" fill='grey' fontStyle="italic">
        ₹{dataObjects[1].amount}
        </text>
        <text x="50%" y="77%" textAnchor="middle" dominantBaseline="central" fontSize={20} fill='grey' fontStyle="italic">
        of ₹{dataObjects[0].amount+dataObjects[1].amount}
        </text>
        <text x="50%" y="90%" textAnchor="middle" dominantBaseline="central" fontSize={15} fill='red'>
        {message}
        </text>
        </PieChart>
        </ResponsiveContainer>
    );
  }

export default MyPieChart;