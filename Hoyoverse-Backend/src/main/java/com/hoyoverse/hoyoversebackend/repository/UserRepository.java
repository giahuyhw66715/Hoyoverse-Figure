package com.hoyoverse.hoyoversebackend.repository;

import com.hoyoverse.hoyoversebackend.model.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
