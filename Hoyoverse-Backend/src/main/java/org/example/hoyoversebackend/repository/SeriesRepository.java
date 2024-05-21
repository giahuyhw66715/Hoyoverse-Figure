package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.Series;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeriesRepository extends JpaRepository<Series, String> {
}
