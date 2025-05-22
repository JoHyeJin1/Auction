import React from "react";
import * as S from "../style/styledCustomerCenter";

const CustomerCenterSideBar = () => {
  return (
    <S.Sidebar>
      <h3>고객센터</h3>
      <ul>
        <li><b>공지사항</b></li>
        <li>자주 묻는 질문</li>
        <li>1:1 문의</li>
      </ul>
    </S.Sidebar>
  );
};

export default CustomerCenterSideBar;
