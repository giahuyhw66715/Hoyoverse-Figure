package org.example.hoyoversebackend.service;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.exception.CustomException;
import org.example.hoyoversebackend.model.CartItem;
import org.example.hoyoversebackend.repository.CartItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CartItemService {
    private final CartItemRepository cartItemRepository;

    public List<CartItem> getCartItemsByCartId(String cartId) {
        return cartItemRepository.findAllByCartId(cartId);
    }

    public CartItem save(CartItem cartItem) {
        Optional<CartItem> existingCartItem = cartItemRepository.findByFigureId(cartItem.getFigure().getId());
        if (existingCartItem.isPresent()) {
            existingCartItem.get().setQuantity(existingCartItem.get().getQuantity() + cartItem.getQuantity());
            return cartItemRepository.save(existingCartItem.get());
        }
        return cartItemRepository.save(cartItem);
    }

    public void deleteByCartId(String cartId) {
        cartItemRepository.deleteAllByCartId(cartId);
    }

    public void deleteById(String id) {
        cartItemRepository.deleteById(id);
    }

    public CartItem updateCartItem(CartItem cartItem) {
        Optional<CartItem> currentCartItem = cartItemRepository.findById(cartItem.getId());
        if (currentCartItem.isEmpty()) {
            throw new CustomException("Cart item not found");
        }
        CartItem updatedCartItem = currentCartItem.get();
        updatedCartItem.setFigure(cartItem.getFigure());
        updatedCartItem.setQuantity(cartItem.getQuantity());
        return cartItemRepository.save(updatedCartItem);
    }
}
