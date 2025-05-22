import React, { useState } from "react";
import * as S from "../style/styledCustomerCenter";
import CustomerCenterFAQList from "../components/CustomerCenterFAQList";
import CustomerCenterSideBar from "../components/CustomerCenterSidebar";
import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";

const CustomerCenter = () => {
  const [category, setCategory] = useState("전체");

  return (
    <S.Container>
      <S.Header>
        <HeaderSection />
      </S.Header>
    
      <S.Body>
        <CustomerCenterSideBar/>
        
        <S.ContentArea>
          <h2>자주 묻는 질문</h2>
          <S.SearchInput type="text" placeholder="검색" />
          <S.CategoryWrap>
            {["전체", "이용정책", "구매", "판매"].map((cat) => (
              <S.CategoryButton
                key={cat}
                $selected={category === cat}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </S.CategoryButton>
            ))}
          </S.CategoryWrap>
          <CustomerCenterFAQList selectedCategory={category} />
        </S.ContentArea>
      </S.Body>

        <S.Footer>
          <FooterSection />
        </S.Footer>
      </S.Container>
    
  );
};

export default CustomerCenter;
