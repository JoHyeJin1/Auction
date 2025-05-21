package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Delivery {
    @Id
    private Long deliveryId;

    // 주문과 일대일 관계
    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;

    private String trackingNumber;
    private String deliveryStatus;
}
