package com.auction.auctionapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.auction.auctionapp.service.UserService;

import domain.User;


@Controller
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/register")
    public String showRegisterForm() {
        return "register"; // /WEB-INF/views/register.jsp
    }

    @PostMapping("/register")
    public String register(@RequestParam String username,
                           @RequestParam String password,
                           Model model) {

        boolean result = userService.registerUser(new User(username, password));

        if (result) {
            model.addAttribute("message", "회원가입이 완료되었습니다. 로그인 해주세요.");
            return "login"; // 로그인 페이지로 이동
        } else {
            model.addAttribute("error", "이미 존재하는 아이디입니다.");
            return "register";
        }
    }
}
