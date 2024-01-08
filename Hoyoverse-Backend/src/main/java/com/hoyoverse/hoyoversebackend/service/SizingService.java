package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.product.Sizing;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.repository.SizingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SizingService {
    @Autowired
    private SizingRepository sizingRepository;

    public Response<List<Sizing>> getAllSizings() {
        return new Response<>(Response.SUCCESS, "Get all sizings successfully", sizingRepository.findAll());
    }

    public Response<Sizing> saveSizing(Sizing sizing) {
        return new Response<>(Response.SUCCESS, "Save sizing successfully", sizingRepository.save(sizing));
    }

    public Response<Sizing> getSizingById(Integer id) {
        return new Response<>(Response.SUCCESS, "Get sizing successfully", sizingRepository.findById(id).orElse(null));
    }

    public Response<Sizing> deleteSizingById(Integer id) {
        Sizing sizing = sizingRepository.findById(id).orElse(null);
        if (sizing != null) {
            sizingRepository.deleteById(sizing.getId());
            return new Response<>(Response.SUCCESS, "Delete sizing successfully", sizing);
        }
        return new Response<>(Response.NOT_FOUND, "Sizing not found");
    }

    public Response<Sizing> updateSizing(Integer id, Sizing sizing) {
        Sizing existingSizing = sizingRepository.findById(id).orElse(null);
        if (existingSizing != null) {
            existingSizing.setSize(sizing.getSize());
            return new Response<>(Response.SUCCESS, "Update sizing successfully", sizingRepository.save(existingSizing));
        }
        return new Response<>(Response.NOT_FOUND, "Sizing not found");
    }
}
