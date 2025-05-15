import styled from "styled-components";

export const JoinWrapper = styled.div`
  width: 500px;
  min-height: 1000px;
  border-radius: 10px;
  background: #fff;
  margin: 40px auto;
  padding: 30px 30px;
  box-sizing: border-box;

  h1 {
    color: #000;
    font-family: Pretendard;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 30px;
  }
`;

export const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .input-row {
    display: flex;
    flex-direction: column;

    label {
      color: #000;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    input,
    select {
      width: 100%;
      font-size: 16px;
      font-family: Pretendard;
      color: #222;
      border: none;
      border-bottom: 1px solid rgba(185, 185, 185, 0.55);
      padding: 8px 0;
      background: none;
      outline: none;

      &::placeholder {
        color: #b9b9b9;
      }
    }

    select {
      padding: 4px 0;
      color: #666;
    }

    .with-button {
      display: flex;
      align-items: center;
      gap: 12px;

      input {
        flex: 1;
      }

      button {
        width: 80px;
        height: 30px;
        font-size: 12px;
        border-radius: 6px;
        border: 1px solid rgba(102, 102, 102, 0.3);
        background: #fff;
        color: #666;
        cursor: pointer;
        &:hover {
          background: #d9d9d9;
          border: 1px solid #d9d9d9;
          text-decoration: underline;
        }
      }
    }
  }
`;

export const AgreeBox = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: #d9d9d9;
  border-radius: 10px;
  font-size: 14px;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: #000;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`;

export const JoinEnd = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 52px;
  border-radius: 10px;
  background: #d9d9d9;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: not-allowed;

  &:enabled {
    background: #000;
    cursor: pointer;
  }
`;
