package com.hoyoverse.hoyoversebackend.repository;

import com.hoyoverse.hoyoversebackend.model.product.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Integer> {
}
