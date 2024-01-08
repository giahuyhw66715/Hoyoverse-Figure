package com.hoyoverse.hoyoversebackend.repository;

import com.hoyoverse.hoyoversebackend.model.product.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, Integer> {
}
