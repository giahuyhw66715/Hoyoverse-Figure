package org.example.hoyoversebackend.controller;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.model.Order;
import org.example.hoyoversebackend.service.OrderService;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class OrderController {
    private final OrderService orderService;

    @GetMapping("/orders")
    public List<Order> getOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/users/{user_id}/orders")
    public List<Order> getOrdersByUserId(@PathVariable(value = "user_id" ) Integer userId) {
        return orderService.getOrdersByUserId(userId);
    }

    @GetMapping("/orders/{id}")
    public Order getOrderById(@PathVariable String id) {
        return orderService.findById(id);
    }

    @PostMapping("/orders")
    public Order saveOrder(@RequestBody Order order) {
        return orderService.saveOrder(order);
    }

    @DeleteMapping("/orders/{id}")
    @Transactional
    public void deleteOrder(@PathVariable String id) {
        orderService.deleteById(id);
    }
}
