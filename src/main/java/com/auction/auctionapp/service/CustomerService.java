package com.auction.auctionapp.service;

import java.util.List;
import java.util.Map;

import com.auction.auctionapp.model.Customer;

public interface CustomerService {

    void createInquiry(String userId, String title, String content);

    void viewFAQList();

    void viewNoticeList();
}
