package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, String> {
    List<Order> getOrdersByUserId(Integer userId);
}
