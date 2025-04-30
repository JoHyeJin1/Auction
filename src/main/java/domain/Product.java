package domain;

import jakarta.persistence.Entity;
import org.springframework.data.annotation.*;

@Entity
public class Product {

    @Id
    private Long product;

    //판매자정보

    private String name;
    private String description;
    private int startingPrice;
    private String imageUrl;

}
