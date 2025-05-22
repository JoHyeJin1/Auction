package com.auction.auctionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auction.auctionapp.domain.Interest;

public interface InterestRepository extends JpaRepository<Interest, Long> {
}
