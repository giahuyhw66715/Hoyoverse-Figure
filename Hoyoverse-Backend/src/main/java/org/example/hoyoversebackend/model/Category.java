package org.example.hoyoversebackend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
public class Category {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 8);
    private String name;
    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private List<Figure> figures;
}
