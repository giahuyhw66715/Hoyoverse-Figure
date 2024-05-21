package org.example.hoyoversebackend.service;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.model.Order;
import org.example.hoyoversebackend.repository.OrderRepository;
import org.example.hoyoversebackend.repository.OrderItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final OrderItemRepository orderItemRepository;
    public List<Order> getOrdersByUserId(Integer userId) {
        return orderRepository.getOrdersByUserId(userId);
    }

    public Order saveOrder(Order order) {
        return orderRepository.save(order);
    }

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public void deleteById(String id) {
        orderItemRepository.deleteByOrderId(id);
        orderRepository.deleteById(id);
    }

    public Order findById(String id) {
        return orderRepository.findById(id).orElse(null);
    }
}
