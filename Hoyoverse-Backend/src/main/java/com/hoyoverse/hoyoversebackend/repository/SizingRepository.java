package com.hoyoverse.hoyoversebackend.repository;

import com.hoyoverse.hoyoversebackend.model.product.Sizing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SizingRepository extends JpaRepository<Sizing, Integer> {
}
