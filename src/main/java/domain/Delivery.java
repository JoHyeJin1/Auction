package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Delivery {

    @Id
    private Long delivery;

    //주문정보

    private String trackingNumber;
    private String deliveryStatus;
}
