package org.example.hoyoversebackend.controller;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.model.Series;
import org.example.hoyoversebackend.service.SeriesService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/series")
public class SeriesController {
    private final SeriesService seriesService;

    @GetMapping
    public Page<Series> getSeries(@RequestParam Map<String, String> requestParams) {
        return seriesService.getSeries(requestParams);
    }

    @GetMapping("/{id}")
    public Series getSeries(@PathVariable String id) {
        return seriesService.findById(id);
    }

    @PostMapping
    public Series saveSeries(@RequestBody Series series) {
        return seriesService.saveSeries(series);
    }

    @DeleteMapping("/{id}")
    public void deleteSeries(@PathVariable String id) {
        seriesService.deleteById(id);
    }

    @PutMapping("/{id}")
    public Series updateSeries(@PathVariable String id, @RequestBody Series series) {
        return seriesService.updateSeries(id, series);
    }
}
