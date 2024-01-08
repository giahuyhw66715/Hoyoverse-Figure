package com.hoyoverse.hoyoversebackend.model.product;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id", nullable = false)
    private Product product;
    private String url;
}
