package com.auction.auctionapp.controller;

import com.auction.auctionapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;

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
    
    //로그인 세션, 만약 로그인 안 했으면 로그인하는 창으로 넘어가는거고, 로그인을 했으면 로그인 한 사용자의 마이페이지로 가는걸로 생각했어!
    @GetMapping("/mypage")
    public String myPage(HttpSession session, Model model) {
        String loginUser = (String) session.getAttribute("loginUser");
        if (loginUser == null) {
            return "redirect:/login";  // 로그인 안 했으면 리다이렉트
        }

        model.addAttribute("username", loginUser);
        return "mypage"; // 로그인한 사용자의 마이페이지
    }
}
