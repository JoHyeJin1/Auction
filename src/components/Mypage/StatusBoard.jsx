import React from "react";
import StatuseItem from "./StatusItem";

const StatusBoard = ({ title, data }) => {
  const [전체, 입찰중, 진행중, 종료] = data;
  return (
    <div style={{ marginBottom: "30px" }}>
      <h3>{title}</h3>
      <div
        style={{
          display: "flex",
          background: "#f5f5f5",
          borderRadius: "10px",
          padding: "20px 0",
        }}
      >
        <StatuseItem label="전체" count={전체} color="red" />
        <StatuseItem label="입찰 중" count={입찰중} />
        <StatuseItem label="진행 중" count={진행중} />
        <StatuseItem label="종료" count={종료} />
      </div>
    </div>
  );
};

export default StatusBoard;
