import styled from "styled-components";

export const Header = styled.div``;
export const Footer = styled.div``;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  border: 1px solid #fff;
`;

export const Sidebar = styled.div`
  width: 214px;
  height: 150px;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  border: 1px solid rgba(102, 102, 102, 0.2);
  font-family: Pretendard;
  font-size: 14px;
  display: inline-block;
  white-space: nowrap;
  writing-mode: horizontal-tb;
  word-break: keep-all;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-top: 10px;
    cursor: pointer;
  }

  li b {
    color: black;
  }
`;

export const ContentArea = styled.div`
  margin-left:20px;
  flex: 1;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  margin-bottom:40px;
`;

export const CategoryWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const CategoryButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ $selected }) => ($selected ? "black" : "#f2f2f2")};
  color: ${({ $selected }) => ($selected ? "white" : "black")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FaqItem = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  strong {
    width: 100px;
    color: gray;
  }

  span {
    flex: 1;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 20px;
`;