package dao;

import java.util.List;

import com.auction.auctionapp.domain.Product;

public interface ProductDao {
    List<Product> findAll();
    Product findById(Long productId);
    void insertProduct(Product product);
    void updateProduct(Product product);
    void deleteProduct(Long productId);
}

