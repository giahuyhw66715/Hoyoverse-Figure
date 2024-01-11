package com.hoyoverse.hoyoversebackend.repository;

import com.hoyoverse.hoyoversebackend.model.product.Series;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeriesRepository extends JpaRepository<Series, Integer> {
}
