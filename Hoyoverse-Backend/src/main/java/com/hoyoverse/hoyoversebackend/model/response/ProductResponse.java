package com.hoyoverse.hoyoversebackend.model.response;

import com.hoyoverse.hoyoversebackend.model.product.Figure;
import com.hoyoverse.hoyoversebackend.model.product.Image;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductResponse {
    private Integer id;
    private String title;
    private int price;
    private String images;
}
