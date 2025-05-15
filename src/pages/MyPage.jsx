import React from "react";
import * as M from "../style/styledMyPage";
import { useNavigate } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
import MypageMenu from "../components/Mypage/MypageMenu";
import ProfileCard from "../components/Mypage/ProfileCard";
import StatusBoard from "../components/Mypage/StatusBoard";

const MyPage = () => {
  return (
    <M.Container>
      <M.Header>
        <HeaderSection />
      </M.Header>

      <M.MyPageSection>
        <MypageMenu />
      </M.MyPageSection>

      <M.Footer>
        <FooterSection />
        <ProfileCard />
        <StatusBoard title="구매 내역" data={[2, 1, 0, 1]} />
        <StatusBoard title="판매매 내역" data={[2, 1, 0, 1]} />
        <StatusBoard title="관심심 내역" data={[10, 1, 0, 1]} />
      </M.Footer>
    </M.Container>
  );
};

export default MyPage;
