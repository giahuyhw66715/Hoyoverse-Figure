package org.example.hoyoversebackend.service;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.specification.FigureSpecification;
import org.example.hoyoversebackend.model.CustomPageRequest;
import org.example.hoyoversebackend.exception.CustomException;
import org.example.hoyoversebackend.model.Figure;
import org.example.hoyoversebackend.repository.FigureRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FigureService {
    private final FigureRepository figureRepository;

    public Page<Figure> getFigures(Map<String, String> params) {
        CustomPageRequest customPageRequest = new CustomPageRequest(params);
        Pageable pageable = customPageRequest.createPageable();

        Specification<Figure> specification = Specification
                .where(FigureSpecification.inManufacturerIds(params.get("manufacturer_ids")))
                .and(FigureSpecification.hasFigureInCategoryId(params.get("category_id")))
                .and(FigureSpecification.hasFigureInSeriesId(params.get("series_id")))
                .and(FigureSpecification.inRangeOfPrice(params.get("min_price"), params.get("max_price")))
                .and(FigureSpecification.searchTitle(params.get("title")));
        return figureRepository.findAll(specification, pageable);
    }

    public Figure getFigure(String figureId) {
        return figureRepository.findById(figureId).orElseThrow(() -> new CustomException("Figure Not Found"));
    }

    public Figure saveFigure(Figure figure) {
        return figureRepository.save(figure);
    }

    public void deleteById(String figureId) {
        figureRepository.deleteById(figureId);
    }

    public Figure updateFigure(String figureId, Figure figure) {
        Optional<Figure> optionalFigure = figureRepository.findById(figureId);
        if (optionalFigure.isEmpty()) {
            throw new CustomException("Figure Not Found");
        }
        Figure existedFigure = optionalFigure.get();
        existedFigure.setTitle(figure.getTitle());
        existedFigure.setCategory(figure.getCategory());
        existedFigure.setPrice(figure.getPrice());
        existedFigure.setSeries(figure.getSeries());
        existedFigure.setManufacturer(figure.getManufacturer());
        existedFigure.setCharacterName(figure.getCharacterName());
        existedFigure.setAvailableQuantity(figure.getAvailableQuantity());
        existedFigure.setTotalQuantity(figure.getTotalQuantity());
        existedFigure.setSize(figure.getSize());
        existedFigure.setReleaseDate(figure.getReleaseDate());
        existedFigure.setImage(figure.getImage());
        return figureRepository.save(existedFigure);
    }
}
