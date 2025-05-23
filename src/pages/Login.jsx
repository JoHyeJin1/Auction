import React, { useState } from "react";
import * as L from "../style/styledLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //회원가입 하러가기
  const navigate = useNavigate();

  const gotoJoin = () => {
    navigate("/join");
  };

  //로그인 완료하기
  const [isVerified, setIsVerified] = useState(false);

  const handleVerity = () => {
    if (isVerified) return;
    setIsVerified(true);
    localStorage.setItem("token", "true");
    navigate("/main");
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <L.LoginWrapper>
      <h2 onClick={goHome}>경매마당</h2>

      <L.Loginsection>
        <label>아이디</label>
        <br />
        <input type="text" placeholder="abc@gmil.com" />
        <br />
        <label>비밀번호</label>
        <br />
        <input type="password" placeholder="비밀번호" />
      </L.Loginsection>

      <L.LoginBtn onClick={handleVerity}>
        {isVerified ? "완료" : "로그인"}
      </L.LoginBtn>

      <L.GotoJoin>
        <ul>
          <li onClick={gotoJoin}>이메일 가입</li>
          <li>이메일 찾기</li>
          <li>비밀번호 찾기</li>
        </ul>
      </L.GotoJoin>

      <L.LoginMenu>
        <div className="naver">
          <img src="/images/naver.svg" alt="네이버" />
          <p>네이버 로그인</p>
        </div>
        <div className="apple">
          <img src="/images/apple.svg" alt="애플" />
          <p>애플 로그인</p>
        </div>
      </L.LoginMenu>
    </L.LoginWrapper>
  );
};

export default Login;
