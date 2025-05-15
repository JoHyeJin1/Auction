import React, { useState, useEffect } from "react";
import * as M from "../style/styledMain";
import HotItemSection from "../components/HotItemSection";
import FooterSection from "../components/FooterSection";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "/images/slider01.jpg",
    "/images/slider02.jpg",
    "/images/slider03.jpg",
    "/images/slider04.jpg",
  ];
  const imageCount = images.length;
  //자동 슬라이드 함수
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imageCount);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  //버튼함수
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + imageCount) % imageCount);
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % imageCount);
  };

  // 카테고리 데이터
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/categoryList.json`)
      .then((res) => res.json())
      .then((data) => setCategoryList(data));
  }, []);

  // 인기아이템 데이터
  const [hotItemList, setHotItemList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/hotItemList.json`)
      .then((res) => res.json())
      .then((data) => setHotItemList(data));
  }, []);

  //로그인 상태관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // 로그인 버튼
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  // 마이페이지 이동
  const goToMypage = () => {
    navigate("/maypage");
  };

  return (
    <M.Container>
      <M.Header>
        <M.Logo>경매마당</M.Logo>
        <M.Nav>
          <M.NavIconItem>
            <img
              src={`${process.env.PUBLIC_URL}/images/home.svg`}
              alt="home"
              width="30px"
            />
          </M.NavIconItem>
          <M.NavItem>경매목록</M.NavItem>
          <M.NavItem>출품하기</M.NavItem>
          <M.NavItem>마이페이지</M.NavItem>
          <M.NavItem>고객센터</M.NavItem>
        </M.Nav>
        <M.BtnWrap>
          <M.SerchBtn>
            <img
              src={`${process.env.PUBLIC_URL}/images/search.svg`}
              alt="search"
              width="30px"
            />
          </M.SerchBtn>
          {isLoggedIn ? (
            <M.loginBtn>마이페이지</M.loginBtn>
          ) : (
            <M.loginBtn onClick={goToLogin}>로그인</M.loginBtn>
          )}
        </M.BtnWrap>
      </M.Header>

      <M.Slider>
        <M.SlideWrapper>
          <M.SlideList $current={current}>
            {images.map((img, i) => (
              <M.SlideItem key={i}>
                <img src={process.env.PUBLIC_URL + img} alt={`slide-${i}`} />
              </M.SlideItem>
            ))}
          </M.SlideList>
          <M.Lbtn onClick={prevSlide}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Lbtn.svg`}
              alt="Lbtn"
              width="15px"
            />
          </M.Lbtn>
          <M.Rbtn onClick={nextSlide}>
            <img
              src={`${process.env.PUBLIC_URL}/images/Rbtn.svg`}
              alt="Rbtn"
              width="15px"
            />
          </M.Rbtn>
        </M.SlideWrapper>
      </M.Slider>
      <M.Category>
        <h2>카테고리</h2>
        <M.CategoryGrid>
          {categoryList.map((item, index) => (
            <M.CategoryCard key={index}>
              <img src={process.env.PUBLIC_URL + item.img} alt={item.label} />
              <span>{item.label}</span>
            </M.CategoryCard>
          ))}
        </M.CategoryGrid>
      </M.Category>
      <M.HotItem>
        <HotItemSection itemList={hotItemList} />
      </M.HotItem>
      <M.Footer>
        <FooterSection />
      </M.Footer>
    </M.Container>
  );
};

export default Main;
