package com.auction.auctionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auction.auctionapp.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    
}
