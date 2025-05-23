import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  border: 1px solid #fff;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 0;
`;

export const Logo = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  flex-wrap: nowrap;
  white-space: nowrap;
  padding-left: 10px;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  flex-wrap: nowrap;
  white-space: nowrap;
  gap: 10px;
  padding: 0 100px;
`;

export const NavItem = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  margin: 0 30px;

  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    width: 120px;
    height: 35px;
    border-radius: 5px;
    background: rgba(245, 245, 245, 0.96);
    z-index: -1;
  }

  &:hover::before {
    display: block;
  }
`;

export const NavIconItem = styled(NavItem)`
  padding-top: 2px;
  padding-right: 5px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    width: 120px;
    height: 35px;
    border-radius: 5px;
    background: rgba(245, 245, 245, 0.96);
    z-index: -1;
  }

  img {
    height: 30px;
    width: 30px;
    margin: auto;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-left: auto;
  padding-right: 15px;
`;

export const SerchBtn = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

export const loginBtn = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  width: 70px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid #000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #d9d9d9;
    border: 1px solid #d9d9d9;
    text-decoration: underline;
  }
`;
export const SliderMain = styled.div``;
export const Slider = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
`;
export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const SlideList = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $current }) => `translateX(-${$current * 100}%)`};
`;

export const SlideItem = styled.div`
  min-width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Lbtn = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
export const Rbtn = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const Category = styled.div`
  width: 100%;
  height: 350px;
  margin-top: 40px;
  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    padding-left: 10px;
    padding-top: 10px;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;
export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  img {
    width: 200px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 8px;
  }

  span {
    font-size: 14px;
    color: #333;
    text-align: center;
    white-space: nowrap;
    display: block;
  }

  &:hover {
    opacity: 0.85;
    transform: scale(1.03);
    transition: all 0.2s;
  }
`;
export const HotItem = styled.div``;
export const HotItemWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;

  h2 {
    font-size: 20px;
    font-weight: 700;
    padding-top: 20px;
    padding-left: 10px;
  }
`;

export const HotItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  margin: 0 20px;
`;
export const HotCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-4px);
  }

  .thumb {
    position: relative;
    width: 100%;
    height: 170px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .bookmark {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 20px;
      height: 20px;
    }
  }

  .info {
    padding: 14px 12px;

    .category {
      font-size: 12px;
      color: #888;
      margin-bottom: 4px;
    }

    .desc {
      font-size: 14px;
      font-weight: 500;
      color: #333;
      margin-bottom: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .price {
      font-size: 13px;
      color: #222;
      margin-bottom: 4px;

      strong {
        font-weight: bold;
      }
    }

    .date {
      font-size: 12px;
      color: #555;
    }
  }
`;

export const Footer = styled.div``;
export const FooterWrraper = styled.div`
  width: 100%;
  height: 500px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const FooterTop = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  border-bottom: 1px solid #ddd;

  .column {
    flex: 1;
  }
  .column.last {
    margin-left: auto;
    flex: none;
    width: 300px;
  }
  h4 {
    font-weight: 700;
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 6px;
      color: #555;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin: 4px 0;
    color: #777;
    font-size: 12px;
    line-height: 1.4;
  }

  button {
    margin-top: 12px;
    padding: 6px 12px;
    background: #000;
    color: #fff;
    border: none;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 10px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 0 20px;

  .left {
    flex: 1;
  ul {
    display: flex;
    gap: 16px;
    list-style: none;
    padding: 0;

    li {
      font-size: 13px;
      color: #444;

      strong {
        font-weight: bold;
      }

      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  p {
    font-size: 12px;
    color: #999;
    line-height: 1.5;
    margin-bottom: 10px;
  }
    .right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
  }
`;

export const FooterIcons = styled.div`
  margin: 10px 0;
  padding-right: 10px;
  img {
    width: 20px;
    height: 20px;
    margin: 0 5px;
    cursor: pointer;
  }
`;
