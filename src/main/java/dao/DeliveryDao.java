package dao;

import com.auction.auctionapp.domain.Delivery;

public interface DeliveryDao {
    Delivery findByOrderId(Long orderId);
    void insertDelivery(Delivery delivery);
    void updateDelivery(Delivery delivery);
}
