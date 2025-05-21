package com.auction.auctionapp.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class LoginController {

    // 임시 아이디/비밀번호
    private static final String TEST_ID = "user1";
    private static final String TEST_PW = "pass123";

    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    @PostMapping("/login")
    public String login(@RequestParam String username,
                        @RequestParam String password,
                        HttpSession session,
                        Model model) {
        if (TEST_ID.equals(username) && TEST_PW.equals(password)) {
            session.setAttribute("loginUser", username);
            return "redirect:/main";
        } else {
            model.addAttribute("error", "아이디 또는 비밀번호가 틀렸습니다.");
            return "login";
        }
    }

    @GetMapping("/main")
    public String mainPage(HttpSession session) {
        if (session.getAttribute("loginUser") == null) {
            return "redirect:/login";
        }
        return "main";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login";
    }
}
