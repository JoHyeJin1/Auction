package dao;

import java.util.List;

import com.auction.auctionapp.domain.Auction;

public interface AuctionDao {
    List<Auction> findAll();
    Auction findById(Long auctionId);
    void insertAuction(Auction auction);
    void updateAuction(Auction auction);
    void deleteAuction(Long auctionId);
}