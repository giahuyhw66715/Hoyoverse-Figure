package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, String> {
    void deleteByOrderId(String id);
}
