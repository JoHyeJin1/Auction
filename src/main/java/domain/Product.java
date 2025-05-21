package domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.*;
import jakarta.persistence.Id;

@Getter
@Setter
@Entity
public class Product {

    @Id
    private Long productId;

    // 경매와 양방향 일대일 관계
    @OneToOne(mappedBy = "product", cascade = CascadeType.ALL)
        private Auction auction;


    // 판매자 (User)와 다대일 관계
    @ManyToOne
    @JoinColumn(name = "seller_id")
    private User seller;


    private String name;
    private String description;
    private int startingPrice;
    private String imageUrl;

}
