import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ["#8884d8", "#dbcedb"]

const MyPieChart = ({ dataObjects }) => (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width="90%" height="100%">
        <Pie
          data={dataObjects}
          cx="50%"
          cy="90%"
          startAngle={180}
          endAngle={0}
          innerRadius={120}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
        {dataObjects.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        </Pie>
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="central" fontSize={30} fontWeight="bold" fill='grey' fontStyle="italic">
        ₹{dataObjects[0].value}
        </text>
        <text x="50%" y="77%" textAnchor="middle" dominantBaseline="central" fontSize={20} fill='grey' fontStyle="italic">
        of ₹{dataObjects[0].value+dataObjects[1].value}
        </text>
        </PieChart>
        </ResponsiveContainer>
    );

export default MyPieChart;