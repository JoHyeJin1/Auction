package com.auction.auctionapp.converter;

import com.auction.auctionapp.repository.UserRepository;
import com.auction.auctionapp.domain.User;
import com.auction.auctionapp.dto.ProductEntryDTO;
import com.auction.auctionapp.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProductConverter {

    @Autowired
    private UserRepository userRepository;

    public Product toEntity(ProductEntryDTO dto, String userId) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("유저를 찾을 수 없습니다."));

        return Product.builder()
                .name(dto.getProductName())
                .description(dto.getProductDescription())
                .productPrice(dto.getProductPrice())
                .deadline(dto.getDeadline())
                .user(user)
                .build();
    }
}
