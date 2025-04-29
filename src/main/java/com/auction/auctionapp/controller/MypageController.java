package com.auction.auctionapp.controller;

import com.auction.auctionapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/mypage")
public class MypageController {

    private final UserService userService;

    @Autowired
    public MypageController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/purchases")
    public String getPurchaseHistory(@RequestParam String userId) {
        // TODO: 구매내역 조회
        return "구매내역 반환";
    }

    @GetMapping("/sales")
    public String getSalesHistory(@RequestParam String userId) {
        // TODO: 판매내역 조회
        return "판매내역 반환";
    }

    @GetMapping("/favorites")
    public String getFavoriteItems(@RequestParam String userId) {
        // TODO: 관심상품 조회
        return "관심상품 반환";
    }
}
