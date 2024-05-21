package org.example.hoyoversebackend.controller;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.service.CartItemService;
import org.example.hoyoversebackend.model.CartItem;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class CartItemController {
    private final CartItemService cartItemService;

    @GetMapping("/cart/{cartId}/items")
    public List<CartItem> getCartItemsByCartId(@PathVariable String cartId) {
        return cartItemService.getCartItemsByCartId(cartId);
    }

    @PostMapping("/cart-items")
    public CartItem saveCartItem(@RequestBody CartItem cartItem) {
        return cartItemService.save(cartItem);
    }

    @Transactional
    @DeleteMapping("/cart-items")
    public void deleteCartItem(
            @RequestParam(required = false, value = "cart_id") String cartId,
            @RequestParam(required = false, value = "id") String id
    ) {
        if (cartId != null) {
            cartItemService.deleteByCartId(cartId);
        } else if (id != null) {
            cartItemService.deleteById(id);
        }
    }

    @PutMapping("/cart-items")
    public CartItem updateCartItem(@RequestBody CartItem cartItem) {
        return cartItemService.updateCartItem(cartItem);
    }
}
