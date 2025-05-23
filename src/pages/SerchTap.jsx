import React from "react";
import styled from "styled-components";

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 80px;
  z-index: 1000;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 500px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Cancel = styled.button`
  border: none;
  background: none;
  font-size: 16px;
  color: #555;
  cursor: pointer;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px;
  font-size: 15px;
  border-radius: 12px;
  border: none;
  background-color: #f3f3f3;
  margin-bottom: 24px;
  box-sizing: border-box;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const KeywordWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Keyword = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  background-color: #f0f0f0;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;

const SerchTap = ({ onClose }) => {
  const keywords = ["뉴발란스", "워터밤", "일렉기타", "아디다스", "샌들"];

  return (
    <ModalWrap>
      <ModalBox>
        <TopBar>
          <div></div>
          <Cancel onClick={onClose}>취소</Cancel>
        </TopBar>

        <SearchInput placeholder="브랜드, 상품, 프로필 등" />

        <SectionTitle>추천 검색어</SectionTitle>
        <KeywordWrap>
          {keywords.map((word) => (
            <Keyword key={word}>{word}</Keyword>
          ))}
        </KeywordWrap>
      </ModalBox>
    </ModalWrap>
  );
};

export default SerchTap;
