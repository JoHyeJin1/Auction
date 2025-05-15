import React from "react";
import * as M from "../style/styledMain";

const FooterSection = () => {
  return (
    <M.FooterWrraper>
      <M.FooterTop>
        <div className="column">
          <h4>이용안내</h4>
          <ul>
            <li>이용정책</li>
            <li>패널티 정책</li>
            <li>가이드 라인</li>
          </ul>
        </div>
        <div className="column">
          <h4>고객지원</h4>
          <ul>
            <li>공지사항</li>
            <li>서비스 소개</li>
            <li>스토어 안내</li>
          </ul>
        </div>
        <div className="column last">
          <h4>
            고객센터 <strong>1588-0000</strong>
          </h4>
          <p>운영시간 평일 10:00 - 18:00 (토,일,공휴일 휴무)</p>
          <p>점심시간 평일 13:00-14:00</p>
          <p>1:1 문의하기는 온라인에서만 가능합니다</p>
          <button>자주 묻는 질문</button>
        </div>
      </M.FooterTop>

      <M.FooterBottom>
        <div className="left">
          <ul>
            <li>회사소개</li>
            <li>인재채용</li>
            <li>제휴제안</li>
            <li>이용약관</li>
            <li>
              <strong>개인정보처리방침</strong>
            </li>
          </ul>
          <p>
            경매마당 대표 : 동덕여자대학교 우당탕탕
            <br />
            사업자 : 박슬기, 조혜린, 한지혜
            <br />
            대표 연락처 : 20221881@dongduk.ac.kr
            <br />
            사업장소재지 : 서울특별시 성북구 화랑로13길 60
          </p>
        </div>
        <div className="right">
          <M.FooterIcons>
            <img src="/images/insta.svg" alt="인스타" />
            <img src="/images/face.svg" alt="페이스북" />
            <img src="/images/kakao.svg" alt="카카오" />
          </M.FooterIcons>
          <p>ⓒ 우당탕조</p>
        </div>
      </M.FooterBottom>
    </M.FooterWrraper>
  );
};
export default FooterSection;
