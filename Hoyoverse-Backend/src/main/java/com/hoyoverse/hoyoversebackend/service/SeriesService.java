package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.product.Series;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.repository.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeriesService {
    @Autowired
    private SeriesRepository seriesRepository;

    public Response<List<Series>> getAllSeries() {
        return new Response<>(Response.SUCCESS, "Get all series successfully", seriesRepository.findAll());
    }

    public Response<Series> saveSeries(Series series) {
        return new Response<>(Response.SUCCESS, "Save series successfully", seriesRepository.save(series));
    }

    public Response<Series> getSeriesById(Integer id) {
        return new Response<>(Response.SUCCESS, "Get series successfully", seriesRepository.findById(id).orElse(null));
    }

    public Response<Series> deleteSeriesById(Integer id) {
        Series series = seriesRepository.findById(id).orElse(null);
        if (series != null) {
            seriesRepository.deleteById(series.getId());
            return new Response<>(Response.SUCCESS, "Delete series successfully", series);
        }
        return new Response<>(Response.NOT_FOUND, "Series not found");
    }

    public Response<Series> updateSeries(Integer id, Series series) {
        Series existingSeries = seriesRepository.findById(id).orElse(null);
        if (existingSeries != null) {
            existingSeries.setName(series.getName());
            return new Response<>(Response.SUCCESS, "Update series successfully", seriesRepository.save(existingSeries));
        }
        return new Response<>(Response.NOT_FOUND, "Series not found");
    }
}
