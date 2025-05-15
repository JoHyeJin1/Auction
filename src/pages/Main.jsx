import React, { useState, useEffect } from "react";
import * as M from "../style/styledMain";
import HotItemSection from "../components/HotItemSection";
import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";

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

  return (
    <M.Container>
      <M.Header>
        <HeaderSection />
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
