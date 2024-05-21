package org.example.hoyoversebackend.controller;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.model.OrderItem;
import org.example.hoyoversebackend.service.OrderItemService;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/order-items")
public class OrderItemController {
    private final OrderItemService orderItemService;

    @PostMapping
    public OrderItem saveOrderItem(@RequestBody OrderItem orderItem) {
        return orderItemService.saveOrderItem(orderItem);
    }
}
