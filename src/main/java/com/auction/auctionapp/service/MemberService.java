package com.auction.auctionapp.service;

import java.util.List;

import com.auction.auctionapp.model.Customer;

public interface MemberService {
    
    void register(Customer customer);
    List<Customer> getAllMembers();
}