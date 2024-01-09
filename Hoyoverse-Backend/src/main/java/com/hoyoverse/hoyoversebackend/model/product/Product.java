package com.hoyoverse.hoyoversebackend.model.product;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "Product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "retail_price", nullable = false)
    private int retailPrice;
    @Column(name = "discount_price", nullable = false)
    private int discountPrice;
    @Column(name = "character_name", nullable = false)
    private String characterName;
    @Column(name = "release_date", nullable = false, updatable = false)
    @CreationTimestamp
    private Date releaseDate;
    @Column(name = "total_quantity", nullable = false)
    private int totalQuantity;
    @Column(name = "available_quantity", nullable = false)
    private int availableQuantity;
    @ManyToOne
    @JoinColumn(name = "brand_id", referencedColumnName = "id", nullable = false)
    private Brand brand;
    @ManyToOne
    @JoinColumn(name = "sizing_id", referencedColumnName = "id", nullable = false)
    private Sizing sizing;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
    private Category category;
    @OneToMany(mappedBy = "product")
    private Set<Image> images = new HashSet<>();
}
