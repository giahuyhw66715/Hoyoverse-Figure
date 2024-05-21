package org.example.hoyoversebackend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class Cart {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 8);
    @JsonManagedReference
    @OneToMany(mappedBy = "cart")
    private List<CartItem> cartItems;
    @OneToOne
    private User user;
}
