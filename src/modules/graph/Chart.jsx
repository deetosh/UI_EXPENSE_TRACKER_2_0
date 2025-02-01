import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ["#8884d8", "#dbcedb"]

const MyPieChart = ({ dataObjects }) => (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={800} height={400}>
        <Pie
          data={dataObjects}
          // cx={420}
          // cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
        {dataObjects.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        </Pie>
        </PieChart>
        </ResponsiveContainer>
    );

export default MyPieChart;