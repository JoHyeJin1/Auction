import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  border: 1px solid #fff;
`;
export const Header = styled.div``;

export const MyPageSection = styled.div`
  display: flex;
  padding: 30px;
  gap: 40px;
`;

export const MyPageContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
export const Footer = styled.div``;

//구매내역, 판매내역, 관심내역 표시
export const StatusBoardWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
  }
`;

export const StatusItemBox = styled.div`
  display: flex;
  background: #f5f5f5;
  border-radius: 10px;
  padding: 0;
  width: 800px;
  height: 102px;
  font-size: 1px;
`;

export const StatusBox = styled.div`
  flex: 1;
  text-align: center;
  font-size: 14px;
  position: relative;
  margin-top: 25px;

  &::after {
    content: "";
    position: absolute;
    top: 20%;
    right: 0;
    width: 1px;
    height: 40%;
    background-color: #ddd;
  }
  &:last-child::after {
    display: none;
  }
`;

export const Label = styled.p`
  margin: 0;
`;

export const Count = styled.p`
  margin: 0;
  font-weight: bold;
  color: ${(props) => props.color || "#111"};
`;

// 왼쪽 사이드바 표시
export const MenuWrap = styled.div`
  width: 214px;
  height: 522px;
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

  h2 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  .menu-section {
    margin-bottom: 28px;

    h4 {
      font-weight: bold;
      font-size: 15px;
      margin-bottom: 12px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 8px;
        color: #888;
        cursor: pointer;

        &:hover {
          color: #000;
          font-weight: 500;
        }
      }
    }
  }
`;

// 프로필 카드 표시
export const ProfileCardWrap = styled.div`
  width: 800px;
  height: 70px;
  flex-shrink: 0;
  background: #fff;
  padding: 20px 24px;
  border-radius: 10px;
  border: 1px solid rgba(102, 102, 102, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  margin: 0 auto;

  .info {
    display: flex;
    align-items: center;
    gap: 20px;

    .profile-img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      overflow: hidden;
      background: #eee;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .nickname {
      font-weight: bold;
      font-size: 16px;
      color: #111;
    }

    .userid {
      font-size: 13px;
      color: #aaa;
      margin-top: 4px;
    }
  }

  .edit-btn {
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
    color: #333;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: #f5f5f5;
    }
  }
`;
