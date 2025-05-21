package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class Auction {
    @Id
    private String auctionId;

    // 상품과 일대일 관계
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    // 주문과 일대일 관계
    @OneToOne(mappedBy = "auction")
    private Order order;

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private int currentPrice;
    private String status;
}
