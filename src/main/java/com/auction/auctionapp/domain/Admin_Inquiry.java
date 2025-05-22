package com.auction.auctionapp.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Admin_Inquiry {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminInquiryId;

    // 관리자와 다대일 관계
    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin admin;

    private String title;
    private String content;
    private LocalDateTime createdAt;
}

