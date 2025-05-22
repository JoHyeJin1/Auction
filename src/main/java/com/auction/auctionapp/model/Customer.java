package com.auction.auctionapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Customer {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerNo; // 기본키
    
    private String nickname;
    private String id;
    private String password;
    private String address;
    private String category;
    private String email;
    private String tell;
    private String payment;

    public Customer() {}

    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTell() { return tell; }
    public void setTell(String tell) { this.tell = tell; }

    public String getPayment() { return payment; }
    public void setPayment(String payment) { this.payment = payment; }
}
