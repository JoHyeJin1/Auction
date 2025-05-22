package dao;

import domain.QnA;

import java.util.List;

public interface QnADao {
    List<QnA> findAll();
    void insertQnA(QnA qna);
    void deleteQnA(Long faqId);
}

