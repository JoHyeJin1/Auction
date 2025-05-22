package dao;

import domain.Notice;

import java.util.List;

public interface NoticeDao {
    List<Notice> findAll();
    void insertNotice(Notice notice);
    void deleteNotice(Long noticeId);
}

