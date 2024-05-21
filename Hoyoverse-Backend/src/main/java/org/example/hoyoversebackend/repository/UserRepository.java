package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
    @Query("SELECT u FROM User u JOIN Token t ON t.user = u WHERE t.token = ?1")
    Optional<User> getUserByToken(String accessToken);
//    Optional<User> findByTokensToken(String token);
}
