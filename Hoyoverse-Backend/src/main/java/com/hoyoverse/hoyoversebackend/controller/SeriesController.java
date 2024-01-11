package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Series;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.service.SeriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/series")
public class SeriesController {
    @Autowired
    private SeriesService seriesService;

    @GetMapping()
    public Response<List<Series>> getAllSeries() {
        return seriesService.getAllSeries();
    }

    @GetMapping("/{id}")
    public Response<Series> getSeriesById(@PathVariable("id") Integer id) {
        return seriesService.getSeriesById(id);
    }

    @PostMapping()
    public Response<Series> saveSeries(@RequestBody Series series) {
        return seriesService.saveSeries(series);
    }

    @PutMapping("/{id}")
    public Response<Series> updateSeries(@PathVariable("id") Integer id, @RequestBody Series series) {
        return seriesService.updateSeries(id, series);
    }

    @DeleteMapping("/{id}")
    public Response<Series> deleteSeriesById(@PathVariable("id") Integer id) {
        return seriesService.deleteSeriesById(id);
    }
}
