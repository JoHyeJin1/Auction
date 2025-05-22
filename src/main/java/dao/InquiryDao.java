package dao;

import java.util.List;

import com.auction.auctionapp.domain.Inquiry;

public interface InquiryDao {
    List<Inquiry> findByUserId(String userId);
    void insertInquiry(Inquiry inquiry);
    void updateInquiryStatus(Long inquiryId, String status);
}

