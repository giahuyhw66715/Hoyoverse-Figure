package org.example.hoyoversebackend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CurrentTimestamp;

import java.sql.Date;
import java.util.List;
import java.util.UUID;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    private String id = UUID.randomUUID().toString().substring(0, 8);
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @JsonManagedReference
    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems;
    @CurrentTimestamp
    private Date orderDate;
    private int total;
    private String address;
    private String phoneNumber;
}
