package com.auction.auctionapp.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Seller_Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sellerInquiryId;

    // 사용자와 다대일 관계 (작성자)
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    private String title;
    private String content;
    private LocalDateTime createdAt;
}
