import React from "react";
import * as M from "../../style/styledMyPage";
const MypageMenu = () => {
  return (
    <M.MenuWrap>
      <h2>마이 페이지</h2>

      <div className="menu-section">
        <h4>쇼핑 정보</h4>
        <ul>
          <li>구매 내역</li>
          <li>판매 내역</li>
          <li>관심</li>
        </ul>
      </div>

      <div className="menu-section">
        <h4>내 정보</h4>
        <ul>
          <li>로그인 정보</li>
          <li>프로필 관리</li>
          <li>주소록</li>
          <li>결제 정보</li>
          <li>판매 정산 계좌</li>
          <li>현금영수증 정보</li>
        </ul>
      </div>
    </M.MenuWrap>
  );
};

export default MypageMenu;
