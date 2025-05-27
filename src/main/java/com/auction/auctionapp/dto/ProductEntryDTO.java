package com.auction.auctionapp.dto;

import lombok.*;

import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class ProductEntryDTO {


    private Long productId;

    private String productName;

    private String productDescription;

    private int productPrice;

    private String productImage;

    private String productCategory;

    private String productStatus;

    private LocalDate deadline;




}
