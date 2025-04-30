package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Inquiry {

    @Id
    private Long inquiryId;

    //작성자 user

    private String title;
    private String content;
    private LocalDateTime createdAt;
}
