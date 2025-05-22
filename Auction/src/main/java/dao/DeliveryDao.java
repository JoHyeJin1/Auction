package dao;

import domain.Delivery;

public interface DeliveryDao {
    Delivery findByOrderId(Long orderId);
    void insertDelivery(Delivery delivery);
    void updateDelivery(Delivery delivery);
}
