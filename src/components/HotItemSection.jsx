import React from "react";
import * as M from "../style/styledMain";

const HotItemSection = ({ itemList }) => {
  return (
    <M.HotItemWrapper>
      <h2>추천 상품</h2>
      <M.HotItemGrid>
        {itemList.map((item, index) => (
          <M.HotCard key={index}>
            <div className="thumb">
              <img src={process.env.PUBLIC_URL + item.img} alt={item.title} />
              <img
                className="bookmark"
                src="/images/bookmark.svg"
                alt="북마크"
              />
            </div>
            <div className="info">
              <p className="category">{item.category}</p>
              <p className="desc">{item.desc}</p>
              <p className="price">
                입찰 시작 가격 : <strong>{item.price}</strong>
              </p>
              <p className="date">마감일 : {item.date}</p>
            </div>
          </M.HotCard>
        ))}
      </M.HotItemGrid>
    </M.HotItemWrapper>
  );
};
export default HotItemSection;
