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
public class Bid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bidId;

    // 경매와 다대일 관계
    @ManyToOne
    @JoinColumn(name = "auction_id")
    private Auction auction;

    // 입찰자 (User)와 다대일 관계
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private int bidAmount;
    private LocalDateTime bidTime;
}