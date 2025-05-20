import React from "react";
import * as M from "../../style/styledMyPage";

const StatusItem = ({ label, count, color }) => {
  return (
    <M.StatusBox>
      <M.Label>{label}</M.Label>
      <M.Count color={color}>{count}</M.Count>
    </M.StatusBox>
  );
};

export default StatusItem;
