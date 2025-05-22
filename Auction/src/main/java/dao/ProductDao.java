package dao;


import domain.Product;

import java.util.List;

public interface ProductDao {
    List<Product> findAll();
    Product findById(Long productId);
    void insertProduct(Product product);
    void updateProduct(Product product);
    void deleteProduct(Long productId);
}

