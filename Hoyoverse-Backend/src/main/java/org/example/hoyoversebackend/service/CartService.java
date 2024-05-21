package org.example.hoyoversebackend.service;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.exception.CustomException;
import org.example.hoyoversebackend.model.Cart;
import org.example.hoyoversebackend.repository.CartRepository;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CartService {
    private final CartRepository cartRepository;

    public Cart getCartByUserId(Integer userId) {
        return cartRepository
                .findCartByUserId(userId)
                .orElseThrow(() -> new CustomException("Cart not found"));
    }

    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }
}
