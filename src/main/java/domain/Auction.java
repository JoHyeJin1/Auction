package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Auction {

    @Id
    private String auctionId;

    //경매할 상품

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private int currentPrice;
    private String status;
}
