package dao;


import java.util.List;

import com.auction.auctionapp.domain.Bid;

public interface BidDao {
    List<Bid> findByAuctionId(Long auctionId);
    void insertBid(Bid bid);
}
