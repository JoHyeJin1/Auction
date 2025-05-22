package domain;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.*;
import jakarta.persistence.Id;

import java.util.List;

@Getter
@Setter
@Entity
public class User {

    @Id
    private String userId;


    private String password;
    private String name;
    private String email;
    private String phoneNumber;
    private String address;

    @OneToMany(mappedBy = "seller")
    private List<Product> products; // 판매한 상품들

    @OneToMany(mappedBy = "user")
    private List<Bid> bids; // 입찰 내역

    @OneToMany(mappedBy = "user")
    private List<Interest> interests; // 관심상품

    @OneToMany(mappedBy = "buyer")
    private List<Order> orders; // 구매한 주문들

    @OneToMany(mappedBy = "user")
    private List<Seller_Inquiry> sellerInquiries; // 판매자 문의들
    
    public User() {}
    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }
    public String getUsername() {
        return name;
    }
    public Object getPassword() {
        return password;
    }

}
