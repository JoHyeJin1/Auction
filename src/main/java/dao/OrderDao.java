package dao;

import com.auction.auctionapp.domain.Order;

public interface OrderDao {
    Order findById(Long orderId);
    void insertOrder(Order order);
    void updateOrder(Order order);
}

