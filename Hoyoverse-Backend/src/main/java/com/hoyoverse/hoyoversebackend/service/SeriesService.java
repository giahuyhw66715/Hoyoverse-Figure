package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.product.Series;
import com.hoyoverse.hoyoversebackend.repository.SeriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class SeriesService {
    @Autowired
    private SeriesRepository seriesRepository;

    public Page<Series> getAllSeries(Pageable pageable) {
        return seriesRepository.findAll(pageable);
    }

    public Series saveSeries(Series series) {
        return seriesRepository.save(series);
    }

    public Series getSeriesById(Integer id) {
        return seriesRepository.findById(id).orElse(null);
    }

    public Series deleteSeriesById(Integer id) {
        Series series = seriesRepository.findById(id).orElse(null);
        if (series != null) {
            seriesRepository.deleteById(series.getId());
            return series;
        }
        return null;
    }

    public Series updateSeries(Integer id, Series series) {
        Series existingSeries = seriesRepository.findById(id).orElse(null);
        if (existingSeries != null) {
            existingSeries.setName(series.getName());
            return seriesRepository.save(existingSeries);
        }
        return null;
    }
}
