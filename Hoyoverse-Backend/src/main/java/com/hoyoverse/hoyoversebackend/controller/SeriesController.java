package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Series;
import com.hoyoverse.hoyoversebackend.model.request.CustomPageRequest;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.service.SeriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/series")
public class SeriesController {
    @Autowired
    private SeriesService seriesService;

    @GetMapping()
    public Page<Series> getAllSeries(@RequestParam Map<String, String> requestParams) {
        CustomPageRequest customPageRequest = new CustomPageRequest(requestParams);
        Pageable pageable = customPageRequest.handlePagination();
        return seriesService.getAllSeries(pageable);
    }

    @GetMapping("/{id}")
    public Series getSeriesById(@PathVariable("id") Integer id) {
        return seriesService.getSeriesById(id);
    }

    @PostMapping()
    public Series saveSeries(@RequestBody Series series) {
        return seriesService.saveSeries(series);
    }

    @PutMapping("/{id}")
    public Series updateSeries(@PathVariable("id") Integer id, @RequestBody Series series) {
        return seriesService.updateSeries(id, series);
    }

    @DeleteMapping("/{id}")
    public Series deleteSeriesById(@PathVariable("id") Integer id) {
        return seriesService.deleteSeriesById(id);
    }
}
