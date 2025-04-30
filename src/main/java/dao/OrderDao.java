package dao;

import domain.Order;

public interface OrderDao {
    Order findById(Long orderId);
    void insertOrder(Order order);
    void updateOrder(Order order);
}

