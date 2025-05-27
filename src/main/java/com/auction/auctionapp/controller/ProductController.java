package com.auction.auctionapp.controller;

import com.auction.auctionapp.domain.Product;
import com.auction.auctionapp.dto.ProductEntryDTO;
import com.auction.auctionapp.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequiredArgsConstructor
@RequestMapping("/api/product")
public class ProductController {


    private final ProductService productService;

    //상품등록
    @GetMapping("/entry")
    public String productEntry() {


        return "Exhibit/ProductEntry";
    }

    @PostMapping("/entry")
    public String productEntryComplete(@ModelAttribute ProductEntryDTO dto, Model model) {
        String userId = "1"; //세션 없어서 임시로 구현함
        productService.productEntry(dto, userId);
        return "redirect:/api/product/entry";
    }

    //상품관리
    @GetMapping("/management")
    public String productManagement(Model model) {
        List<Product> products = productService.findAllByUserId("1"); // 예: 현재 로그인된 유저 ID
        model.addAttribute("products", products);
        return "Exhibit/ProductManagement";
    }
}

