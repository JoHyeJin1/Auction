package com.auction.auctionapp.repository;

import com.auction.auctionapp.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {

}
