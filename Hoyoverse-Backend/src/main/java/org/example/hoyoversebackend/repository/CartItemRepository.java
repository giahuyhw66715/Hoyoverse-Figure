package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, String> {
    List<CartItem> findAllByCartId(String cartId);
    void deleteAllByCartId(String cartId);
    Optional<CartItem> findByFigureId(String figureId);
}
