package com.auction.auctionapp.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "`user`") // user는 MySQL 예약어이므로 백틱으로 감쌈
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_no")
    private Long userNo;

    private String nickname;

    @Column(name = "user_id", nullable = false, unique = true)
    private String userId;


    @Column(nullable = false)
    private String password;

    private String address;
    private String category;
    private String email;
    private String phoneNumber;
    private String bank;
    private String accountNo;

   /* @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Product> products = new ArrayList<>(); */

   @OneToMany(mappedBy = "seller")
    private List<Product> products; // 판매한 상품들

    @OneToMany(mappedBy = "user")
    private List<Bid> bids; // 입찰 내역

    @OneToMany(mappedBy = "user")
    private List<Interest> interests; // 관심상품

    @OneToMany(mappedBy = "buyer")
    private List<Order> orders; // 구매한 주문들

    @OneToMany(mappedBy = "user")
    private List<Seller_Inquiry> sellerInquiries; // 판매자 문의들

}
