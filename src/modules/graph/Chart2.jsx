import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS2 = ["#ff6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40", "#2E7D32"]

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-lg rounded-md border">
          <p className="text-sm font-semibold">&nbsp;Payment Method: {payload[0].payload.payment_method}&nbsp;</p>
          <p className="text-sm">&nbsp;Value: ₹{payload[0].payload.amount}</p>
        </div>
      );
    }
    return null;
  };

const MyPieChart2 = ({ dataObjects }) => {
  
  return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width="90%" height="100%">
        <Pie
          data={dataObjects}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={130}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="amount"
        >
        {dataObjects.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
        ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <svg x="37%" y="36%" width="100" height="100" style={{ transform: "translate(-25px, -25px)" }}>
            <image href="../../../public/icons/payment-method.png" width="100" height="100" />
        </svg>
        </PieChart>
        </ResponsiveContainer>
    );
  }

export default MyPieChart2;