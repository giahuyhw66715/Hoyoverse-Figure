package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.product.Figure;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.repository.FigureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FigureService {
    @Autowired
    private FigureRepository figureRepository;

    public Response<List<Figure>> getAllFigures() {
        return new Response<>(Response.SUCCESS, "Get all figures successfully", figureRepository.findAll());
    }

    public Response<Figure> saveFigure(Figure figure) {
        return new Response<>(Response.SUCCESS, "Save figure successfully", figureRepository.save(figure));
    }

    public Response<Figure> getFigureById(Integer id) {
        return new Response<>(Response.SUCCESS, "Get figure successfully", figureRepository.findById(id).orElse(null));
    }

    public Response<Figure> deleteFigureById(Integer id) {
        Figure figure = figureRepository.findById(id).orElse(null);
        if (figure != null) {
            figureRepository.deleteById(figure.getId());
            return new Response<>(Response.SUCCESS, "Delete figure successfully", figure);
        }
        return new Response<>(Response.NOT_FOUND, "Figure not found");
    }

    public Response<Figure> updateFigure(Integer id, Figure figure) {
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
            return new Response<>(Response.SUCCESS, "Update figure successfully", figureRepository.save(existingFigure));
        }
        return new Response<>(Response.NOT_FOUND, "Figure not found");
    }
}
