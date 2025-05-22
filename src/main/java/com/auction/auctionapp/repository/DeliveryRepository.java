package com.auction.auctionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auction.auctionapp.domain.Delivery;

public interface DeliveryRepository extends JpaRepository<Delivery, Long> {
}
