package dao;

import domain.Auction;

import java.util.List;

public interface AuctionDao {
    List<Auction> findAll();
    Auction findById(Long auctionId);
    void insertAuction(Auction auction);
    void updateAuction(Auction auction);
    void deleteAuction(Long auctionId);
}
