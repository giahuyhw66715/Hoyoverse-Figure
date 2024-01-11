package com.hoyoverse.hoyoversebackend.model.product;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "Series")
public class Series {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String name;
    @OneToMany(mappedBy = "series", cascade = CascadeType.MERGE)
    @JsonIgnore
    private Set<Figure> figures = new HashSet<>();
}
