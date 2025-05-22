package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Order {

    @Id
    private Long orderId;

    //구매자

    //경매상품

    private String shippingAddress;
    private int totalPrice;
    private String orderStatus;
}
