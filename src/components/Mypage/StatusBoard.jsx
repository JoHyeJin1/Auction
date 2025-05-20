import React from "react";
import StatuseItem from "./StatusItem";
import * as M from "../../style/styledMyPage";

const StatusBoard = ({ title, data }) => {
  const [전체, 입찰중, 진행중, 종료] = data;
  return (
    <M.StatusBoardWrap>
      <h3>{title}</h3>
      <M.StatusItemBox>
        <StatuseItem label="전체" count={전체} color="red" />
        <StatuseItem label="입찰 중" count={입찰중} />
        <StatuseItem label="진행 중" count={진행중} />
        <StatuseItem label="종료" count={종료} />
      </M.StatusItemBox>
    </M.StatusBoardWrap>
  );
};

export default StatusBoard;
