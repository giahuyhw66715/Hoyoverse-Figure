package org.example.hoyoversebackend.specification;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.Path;
import org.example.hoyoversebackend.model.Category;
import org.example.hoyoversebackend.model.Figure;
import org.example.hoyoversebackend.model.Manufacturer;
import org.example.hoyoversebackend.model.Series;
import org.springframework.data.jpa.domain.Specification;

import java.util.Arrays;
import java.util.List;

public class FigureSpecification {
    private FigureSpecification() {}

    public static Specification<Figure> inManufacturerIds(String manufacturerIds) {
        if (manufacturerIds == null) return null;
        List<String> manufacturerIdList = Arrays.asList(manufacturerIds.split("\\s*,\\s*"));
        return ((root, query, criteriaBuilder) -> {
            Path<Manufacturer> manufacturerPath = root.get("manufacturer");
            return manufacturerPath.get("id").in(manufacturerIdList);
        });
    }

    public static Specification<Figure> hasFigureInCategoryId(String categoryId) {
        if (categoryId == null) return null;
        return ((root, query, criteriaBuilder) -> {
            Join<Figure, Category> figureCategoryJoin = root.join("category");
            return criteriaBuilder.equal(figureCategoryJoin.get("id"), categoryId);
        });
    }

    public static Specification<Figure> hasFigureInSeriesId(String seriesId) {
        if (seriesId == null) return null;
        return ((root, query, criteriaBuilder) -> {
            Join<Figure, Series> figureCategoryJoin = root.join("series");
            return criteriaBuilder.equal(figureCategoryJoin.get("id"), seriesId);
        });
    }

    public static Specification<Figure> inRangeOfPrice(String minPrice, String maxPrice) {
        if (minPrice == null || maxPrice == null) return null;
        return ((root, query, criteriaBuilder) -> criteriaBuilder.between(root.get("price"), Integer.parseInt(minPrice), Integer.parseInt(maxPrice)));
    }

    public static Specification<Figure> searchTitle(String title) {
        if (title == null) return null;
        return ((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("title"), "%" + title + "%"));
    }
}
