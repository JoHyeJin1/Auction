import React from "react";
import * as S from "../style/styledCustomerCenter";

const CustomerCenterSideBar = () => {
  return (
    <S.Sidebar>
      <h3>고객센터</h3>
      <ul>
        <li><b>자주 묻는 질문</b></li>
        <li>공지사항</li>
        <li>1:1 문의</li>
      </ul>
    </S.Sidebar>
  );
};

export default CustomerCenterSideBar;
