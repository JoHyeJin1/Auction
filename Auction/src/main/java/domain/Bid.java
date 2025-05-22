package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDateTime;

@Entity
public class Bid {

    @Id
    private Long bidld;

    //해당결매

    //입찰자

    private int bidAmount;
    private LocalDateTime bidTime;

}
