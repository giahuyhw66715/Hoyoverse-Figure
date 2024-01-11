package com.hoyoverse.hoyoversebackend.model.product;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "Figure")
public class Figure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "title", nullable = false)
    private String title;
    @Column(name = "price", nullable = false)
    private int price;
    @Column(name = "discount", nullable = false)
    private int discount = 0;
    @Column(name = "character_name", nullable = false)
    private String characterName;
    @Column(name = "release_date", nullable = false, updatable = false)
    @CreationTimestamp
    private Date releaseDate;
    @Column(name = "total_quantity", nullable = false)
    private int totalQuantity;
    @Column(name = "available_quantity", nullable = false)
    private int availableQuantity;
    @Column(name = "height", nullable = false)
    private String height;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "series_id", referencedColumnName = "id", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Series series;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Category category;
    @OneToMany(mappedBy = "figure", cascade = CascadeType.MERGE)
    private Set<Image> images = new HashSet<>();
}
