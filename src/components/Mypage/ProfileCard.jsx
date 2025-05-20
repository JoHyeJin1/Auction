import React from "react";
import * as M from "../../style/styledMyPage";
import { useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const navigate = useNavigate();

  return (
    <M.ProfileCardWrap>
      <div className="info">
        <div className="profile-img">
          <img src="/images/pfofile_default.svg" alt="profile" />
        </div>
        {/* 아직 닉네임, 가입아이디 어떻게 받아올지 구현 못함 */}
        <div className="text">
          <p className="nickname">닉네임</p>
          <p className="userid">가입 아이디</p>
        </div>
      </div>
      <button
        className="edit-btn"
        //   프로필 관리 화면으로 이동하기
        onClick={() => navigate("/mypage/edit-profile")}
      >
        프로필 관리
      </button>
    </M.ProfileCardWrap>
  );
};

export default ProfileCard;
