package dao;

import java.util.List;

import com.auction.auctionapp.domain.Notice;

public interface NoticeDao {
    List<Notice> findAll();
    void insertNotice(Notice notice);
    void deleteNotice(Long noticeId);
}

