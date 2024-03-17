package com.hoyoverse.hoyoversebackend.repository;

import com.hoyoverse.hoyoversebackend.model.product.Figure;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FigureRepository extends JpaRepository<Figure, Integer> {
    Page<Figure> findByCategoryId(Integer categoryId, Pageable pageable);
    Page<Figure> findBySeriesId(Integer seriesId, Pageable pageable);
}
