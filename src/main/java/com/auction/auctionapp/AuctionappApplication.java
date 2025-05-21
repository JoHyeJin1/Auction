package com.auction.auctionapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "domain")
//@EntityScan("com.auction.auctionapp.domain")
public class AuctionappApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuctionappApplication.class, args);
    }

}
