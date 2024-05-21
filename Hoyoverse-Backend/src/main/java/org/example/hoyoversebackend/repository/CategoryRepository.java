package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, String> {
}
