package com.auction.auctionapp.repository;

import domain.Order;
import domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
