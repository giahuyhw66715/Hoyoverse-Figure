package org.example.hoyoversebackend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.UUID;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Figure {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 8);
    private String title;
    private int price;
    @JsonProperty("character_name")
    private String characterName;
    @JsonProperty("release_date")
    private Date releaseDate;
    @JsonProperty("total_quantity")
    private int totalQuantity;
    @JsonProperty("available_quantity")
    private int availableQuantity;
    private String size;
    @ManyToOne
    @JoinColumn(name = "series_id")
    private Series series;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @ManyToOne
    @JoinColumn(name = "manufacturer_id")
    private Manufacturer manufacturer;
    @JsonManagedReference
    @OneToOne(mappedBy = "figure")
    private Image image;
}
