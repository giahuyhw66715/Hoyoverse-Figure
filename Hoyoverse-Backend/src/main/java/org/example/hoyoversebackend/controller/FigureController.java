package org.example.hoyoversebackend.controller;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.service.FigureService;
import org.example.hoyoversebackend.model.Figure;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/figures")
@RequiredArgsConstructor
public class FigureController {
    private final FigureService figureService;

    @GetMapping
    public Page<Figure> getFigures(@RequestParam Map<String, String> params) {
        return figureService.getFigures(params);
    }

    @GetMapping("/{figureId}")
    public Figure getFigure(@PathVariable String figureId) {
        return figureService.getFigure(figureId);
    }

    @PostMapping
    public Figure saveFigure(@RequestBody Figure figure) {
        return figureService.saveFigure(figure);
    }

    @DeleteMapping("/{figureId}")
    public void deleteFigure(@PathVariable String figureId) {
        figureService.deleteById(figureId);
    }

    @PutMapping("/{figureId}")
    public Figure updateFigure(@PathVariable String figureId, @RequestBody Figure figure) {
        return figureService.updateFigure(figureId, figure);
    }
}
