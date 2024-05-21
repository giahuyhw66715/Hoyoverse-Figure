package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, String> {
    Optional<Cart> findCartByUserId(Integer userId);
    void deleteByUserId(Integer userId);
}
