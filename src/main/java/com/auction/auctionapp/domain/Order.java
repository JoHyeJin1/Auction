package com.auction.auctionapp.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "`order`")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    // 구매자 (User)와 다대일 관계
    @ManyToOne
    @JoinColumn(name = "buyer_id")
    private User buyer;

    // 경매 상품과 일대일 관계
    @OneToOne
    @JoinColumn(name = "auction_id")
    private Auction auction;

    private String shippingAddress;
    private int totalPrice;
    private String orderStatus;
}
