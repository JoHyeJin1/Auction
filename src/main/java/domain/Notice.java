package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Notice {

    @Id
    private Long noticeId;

    private String title;
    private String content;
    private LocalDateTime createdAt;
}
