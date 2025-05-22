package com.auction.auctionapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auction.auctionapp.domain.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
