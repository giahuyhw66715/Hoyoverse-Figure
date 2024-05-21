package org.example.hoyoversebackend.service;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.model.CustomPageRequest;
import org.example.hoyoversebackend.exception.CustomException;
import org.example.hoyoversebackend.model.Series;
import org.example.hoyoversebackend.repository.SeriesRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class SeriesService {
    private final SeriesRepository seriesRepository;
    public Page<Series> getSeries(Map<String, String> params) {
        CustomPageRequest customPageRequest = new CustomPageRequest(params);
        Pageable pageable = customPageRequest.createPageable();
        return seriesRepository.findAll(pageable);
    }

    public Series saveSeries(Series series) {
        return seriesRepository.save(series);
    }

    public void deleteById(String id) {
        seriesRepository.deleteById(id);
    }

    public Series updateSeries(String id, Series series) {
        Series existedSeries = seriesRepository.findById(id).orElse(null);
        if (existedSeries == null) {
            throw new CustomException("Series not found");
        }
        existedSeries.setName(series.getName());
        return seriesRepository.save(existedSeries);
    }

    public Series findById(String id) {
        return seriesRepository.findById(id).orElse(null);
    }
}
