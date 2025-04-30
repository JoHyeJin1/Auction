package dao;

import domain.Bid;

import java.util.List;

public interface BidDao {
    List<Bid> findByAuctionId(Long auctionId);
    void insertBid(Bid bid);
}
