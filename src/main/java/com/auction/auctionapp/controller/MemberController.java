package com.auction.auctionapp.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.auction.auctionapp.service.MemberService;

@Controller
public class MemberController {
    @Autowired
    private MemberService memberService;
    
    @RequestMapping("member/join")
    String showJoin() {
        return "member/join";
    }
    
    @RequestMapping("member/login")
    String showLogin() {
        return "member/login";
    }
}