package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Figure;
import com.hoyoverse.hoyoversebackend.model.request.CustomPageRequest;
import com.hoyoverse.hoyoversebackend.service.FigureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/figures")
public class FigureController {
    @Autowired
    private FigureService figureService;

    @GetMapping()
    public Page<Figure> getAllFigures(@RequestParam Map<String, String> requestParams) {
        CustomPageRequest customPageRequest = new CustomPageRequest(requestParams);
        Pageable pageable = customPageRequest.handlePagination();

        if (requestParams.containsKey("category_id") && requestParams.get("category_id") != null) {
            Integer categoryId = Integer.parseInt(requestParams.get("category_id"));
            return figureService.getFiguresByCategory(categoryId, pageable);
        }

        if (requestParams.containsKey("series_id") && requestParams.get("series_id") != null) {
            Integer seriesId = Integer.parseInt(requestParams.get("series_id"));
            return figureService.getFiguresBySeries(seriesId, pageable);
        }

        return figureService.getAllFigures(pageable);
    }

    @PostMapping()
    public Figure saveFigure(@RequestBody Figure figure) {
        return figureService.saveFigure(figure);
    }

    @GetMapping("/{id}")
    public Figure getFigureById(@PathVariable("id") Integer id) {
        return figureService.getFigureById(id);
    }

    @DeleteMapping("/{id}")
    public Figure deleteFigureById(@PathVariable("id") Integer id) {
        return figureService.deleteFigureById(id);
    }

    @PutMapping("/{id}")
    public Figure updateFigure(@PathVariable("id") Integer id, @RequestBody Figure figure) {
        return figureService.updateFigure(id, figure);
    }
}
