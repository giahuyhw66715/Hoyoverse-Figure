package com.hoyoverse.hoyoversebackend.model.product;

import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "Sizing")
public class Sizing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String size;
    @OneToMany(mappedBy = "sizing")
    private Set<Product> products = new HashSet<>();
}
