import React from "react";

const StatusItem = ({ label, count, color }) => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        borderRight: "1px solid #ddd",
        fontSize: "14px",
      }}
    >
      <p>{label}</p>
      <p style={{ fontWeight: "bold", color: color || "#111" }}>{count}</p>
    </div>
  );
};

export default StatusItem;
