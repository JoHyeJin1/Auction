package com.auction.auctionapp.domain;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "`user`")
public class User {

    @Id
    @Column(name = "user_id")
    private String userId;


    private String password;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;

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
