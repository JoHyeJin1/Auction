package com.auction.auctionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auction.auctionapp.domain.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}
