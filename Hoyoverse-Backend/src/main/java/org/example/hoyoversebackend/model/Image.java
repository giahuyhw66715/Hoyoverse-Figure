package org.example.hoyoversebackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Image {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 8);
    @ElementCollection
    private List<String> urls;
    @JsonBackReference
    @OneToOne
    @JoinColumn(name = "figure_id", referencedColumnName = "id")
    private Figure figure;
}
