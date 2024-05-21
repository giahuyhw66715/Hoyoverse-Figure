package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageRepository extends JpaRepository<Image, String> {
}
