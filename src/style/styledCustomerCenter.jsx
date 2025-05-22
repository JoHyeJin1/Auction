import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
`;

export const Sidebar = styled.div`
  width: 200px;
  margin-right: 40px;

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
  flex: 1;
`;

export const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  margin: 10px 0;
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