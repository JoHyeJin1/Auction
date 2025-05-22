package dao;

import java.util.List;

import com.auction.auctionapp.domain.Interest;

public interface InterestDao {
    List<Interest> findByUserId(String userId);
    void insertInterest(Interest interest);
    void deleteInterest(Long interestId);
}

