package com.auction.auctionapp.service.impl;

import com.auction.auctionapp.model.Customer;
import com.auction.auctionapp.repository.CustomerRepository;
import com.auction.auctionapp.service.MemberService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService {

    private final CustomerRepository customerRepository;

    public MemberServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    @Override
    public void register(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public List<Customer> getAllMembers() {
        return customerRepository.findAll();
    }
}
