package com.auction.auctionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auction.auctionapp.domain.Bid;

public interface BidRepository extends JpaRepository<Bid, Long> {
}
