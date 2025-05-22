package com.auction.auctionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auction.auctionapp.domain.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
