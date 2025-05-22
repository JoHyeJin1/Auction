package com.auction.auctionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auction.auctionapp.domain.Auction;

public interface AuctionRepository extends JpaRepository<Auction, Long> {
    
}
