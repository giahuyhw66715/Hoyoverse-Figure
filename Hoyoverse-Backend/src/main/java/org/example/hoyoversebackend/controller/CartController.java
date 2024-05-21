package org.example.hoyoversebackend.controller;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.service.CartService;
import org.example.hoyoversebackend.model.Cart;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/cart")
public class CartController {
    private final CartService cartService;

    @GetMapping
    public Cart getCartByUserId(@RequestParam(required = false, value = "user_id") Integer userId) {
        return cartService.getCartByUserId(userId);
    }

    @PostMapping
    public Cart saveCart(@RequestBody Cart cart) {
        return cartService.saveCart(cart);
    }
}
