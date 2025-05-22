package com.auction.auctionapp.domain;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    // 경매와 양방향 일대일 관계
    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)
        private Auction auction;


    // 판매자 (User)와 다대일 관계
    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;


    private String name;
    private String description;
    private int startingPrice;
    private String imageUrl;

}

