package dao;

import domain.Inquiry;

import java.util.List;

public interface InquiryDao {
    List<Inquiry> findByUserId(String userId);
    void insertInquiry(Inquiry inquiry);
    void updateInquiryStatus(Long inquiryId, String status);
}

