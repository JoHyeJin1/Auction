package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class QnA {

    @Id
    private Long qnaId;

    private String question;
    private String answer;
}
