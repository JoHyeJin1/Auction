package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Notice {

    @Id
    private Long noticeId;

    private String title;
    private String content;
    private LocalDateTime createdAt;
}
