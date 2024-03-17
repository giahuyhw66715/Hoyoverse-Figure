package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.product.Figure;
import com.hoyoverse.hoyoversebackend.repository.FigureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class FigureService {
    @Autowired
    private FigureRepository figureRepository;

    public Page<Figure> getAllFigures(Pageable pageable) {
        return figureRepository.findAll(pageable);
    }

    public Page<Figure> getFiguresByCategory(Integer categoryId, Pageable pageable) {
        return figureRepository.findByCategoryId(categoryId, pageable);
    }

    public Page<Figure> getFiguresBySeries(Integer seriesId, Pageable pageable) {
        return figureRepository.findBySeriesId(seriesId, pageable);
    }

    public Figure saveFigure(Figure figure) {
        return figureRepository.save(figure);
    }

    public Figure getFigureById(Integer id) {
        return figureRepository.findById(id).orElse(null);
    }

    public Figure deleteFigureById(Integer id) {
        Figure figure = figureRepository.findById(id).orElse(null);
        if (figure != null) {
            figureRepository.deleteById(figure.getId());
            return figure;
        }
        return null;
    }

    public Figure updateFigure(Integer id, Figure figure) {
        Figure existingFigure = figureRepository.findById(id).orElse(null);
        if (existingFigure != null) {
            existingFigure.setTitle(figure.getTitle());
            existingFigure.setCharacterName(figure.getCharacterName());
            existingFigure.setSeries(figure.getSeries());
            existingFigure.setPrice(figure.getPrice());
            existingFigure.setDiscount(figure.getDiscount());
            existingFigure.setHeight(figure.getHeight());
            existingFigure.setCategory(figure.getCategory());
            existingFigure.setReleaseDate(figure.getReleaseDate());
            existingFigure.setTotalQuantity(figure.getTotalQuantity());
            existingFigure.setAvailableQuantity(figure.getAvailableQuantity());
            return figureRepository.save(existingFigure);
        }
        return null;
    }
}
