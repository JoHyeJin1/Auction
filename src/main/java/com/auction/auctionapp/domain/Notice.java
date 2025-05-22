package com.auction.auctionapp.domain;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Notice {

    @Id
    private Long noticeId;

    private String title;
    private String content;
    private LocalDateTime createdAt;
}