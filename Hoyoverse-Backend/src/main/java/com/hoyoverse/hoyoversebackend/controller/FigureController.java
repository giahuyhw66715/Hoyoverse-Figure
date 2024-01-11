package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Figure;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.service.FigureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/figures")
public class FigureController {
    @Autowired
    private FigureService figureService;

    @GetMapping()
    public Response<List<Figure>> getAllFigures() {
        return figureService.getAllFigures();
    }

    @PostMapping()
    public Response<Figure> saveFigure(@RequestBody Figure figure) {
        return figureService.saveFigure(figure);
    }

    @GetMapping("/{id}")
    public Response<Figure> getFigureById(@PathVariable("id") Integer id) {
        return figureService.getFigureById(id);
    }

    @DeleteMapping("/{id}")
    public Response<Figure> deleteFigureById(@PathVariable("id") Integer id) {
        return figureService.deleteFigureById(id);
    }

    @PutMapping("/{id}")
    public Response<Figure> updateFigure(@PathVariable("id") Integer id, @RequestBody Figure figure) {
        return figureService.updateFigure(id, figure);
    }
}
