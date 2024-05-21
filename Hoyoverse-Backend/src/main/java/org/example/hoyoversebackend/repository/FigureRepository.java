package org.example.hoyoversebackend.repository;

import org.example.hoyoversebackend.model.Figure;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


public interface FigureRepository extends JpaRepository<Figure, String>, JpaSpecificationExecutor<Figure> {
    Page<Figure> findByCategoryId(String categoryId, Pageable pageable);
    Page<Figure> findBySeriesId(String seriesId, Pageable pageable);
}
