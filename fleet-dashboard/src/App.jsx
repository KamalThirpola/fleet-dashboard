import React from "react";
import data from "./data/data.json";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

function App() {
  //  Calculations
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const avg = (total / data.length).toFixed(2);
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      {/* Title */}
      <h1 style={{ marginBottom: "20px" }}>
        Fleet Dashboard 🚛
      </h1>

      {/* Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={cardStyle}>
          <h3>Total Trucks</h3>
          <p>{data.length}</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Value</h3>
          <p>{total}</p>
        </div>

        <div style={cardStyle}>
          <h3>Average</h3>
          <p>{avg}</p>
        </div>

        <div style={cardStyle}>
          <h3>Highest Value</h3>
          <p>{max}</p>
        </div>
      </div>

      {/* Chart */}
      <h3 style={{ marginBottom: "10px" }}>Performance Trend</h3>

      <LineChart width={600} height={350} data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#ff0000"
          strokeWidth={3}
          dot={{ r: 6 }}
        />
      </LineChart>
    </div>
  );
}

//  Card Style
const cardStyle = {
  background: "#fff",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  minWidth: "120px",
  textAlign: "center"
};

export default App;