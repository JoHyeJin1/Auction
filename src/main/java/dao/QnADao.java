package dao;

import java.util.List;

import com.auction.auctionapp.domain.QnA;

public interface QnADao {
    List<QnA> findAll();
    void insertQnA(QnA qna);
    void deleteQnA(Long faqId);
}

