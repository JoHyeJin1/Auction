package com.auction.auctionapp.domain;

import com.auction.auctionapp.domain.enums.ProductStatus;
import jakarta.persistence.*;
import lombok.*;
import jakarta.persistence.Id;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    // 경매와 양방향 일대일 관계
    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)
        private Auction auction;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product_Images> images = new ArrayList<>();

    @Enumerated(EnumType.STRING)
    private ProductStatus status;

    // 판매자 (User)와 다대일 관계
    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    private LocalDate deadline;

    private String name;
    private String description;
    private int productPrice;
   // private String imageUrl;


}
