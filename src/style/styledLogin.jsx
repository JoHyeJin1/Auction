import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 500px;
  height: 800px;
  //   background: #ffc1da;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  h2 {
    color: #000;
    font-family: Pretendard;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    text-align: center;
    padding-top: 10px;
    cursor: pointer;
  }
`;
export const Loginsection = styled.div`
  margin: 0 auto;
  padding: 0;

  label {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }
  input {
    all: unset;
    width: 450px;
    font-size: 20px;
    margin: 10px 0px;
    border-bottom: 1px solid rgba(185, 185, 185, 0.55);
    margin-bottom: 20px;
  }
`;
export const LoginBtn = styled.div`
  width: 450px;
  height: 58px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #d9d9d9;
  display: grid;
  align-items: center;
  text-align: center;
  cursor: pointer;
  color: #fff;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0;
  margin: 0 auto;

  &:hover {
    opacity: 0.6;
  }
`;
export const GotoJoin = styled.div`
  padding: 10px;
  text-align: center;
  ul {
    list-style: none;
    display: flex;
    gap: 50px;
    cursor: pointer;
    justify-content: center;
    padding-right: 50px;
  }

  li {
    &:hover {
      box-shadow: inset 0 -1px 0 #333;
    }
  }
`;
export const LoginMenu = styled.div`
  .naver {
    display: flex;
    width: 450px;
    height: 58px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background: #fff;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      padding-left: 15px;
    }
    p {
      color: #0b0b0b;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-align: center;
      flex: 1;
    }
  }
  .apple {
    display: flex;
    width: 450px;
    height: 58px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
    background: #fff;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      padding-left: 15px;
    }
    p {
      color: #0b0b0b;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-align: center;
      flex: 1;
    }
  }
`;
