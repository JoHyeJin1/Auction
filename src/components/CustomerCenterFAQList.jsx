import React from "react";
import * as S from "../style/styledCustomerCenter";

const faqData = [
  { category: "이용정책", title: "패널티 정책" },
  { category: "이용정책", title: "가품 상품 판매에 대한 제재" },
  { category: "구매", title: "상품 구매는 어떻게 하나요?" },
  { category: "판매", title: "판매 과정을 설명해주세요." },
  { category: "이용정책", title: "부적절행위 금지" },
];

const CustomerCenterFAQList = ({ selectedCategory }) => {
  const filtered = selectedCategory === "전체"
    ? faqData
    : faqData.filter((item) => item.category === selectedCategory);

  return (
    <S.FaqList>
      {filtered.map((item, idx) => (
        <S.FaqItem key={idx}>
          <strong>{item.category}</strong>
          <span>{item.title}</span>
        </S.FaqItem>
      ))}
    </S.FaqList>
  );
};

export default CustomerCenterFAQList;
