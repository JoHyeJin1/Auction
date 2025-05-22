package com.auction.auctionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auction.auctionapp.domain.Notice;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
}
