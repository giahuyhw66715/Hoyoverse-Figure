package com.hoyoverse.hoyoversebackend.service;

import com.hoyoverse.hoyoversebackend.model.product.Brand;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {
    @Autowired
    private BrandRepository brandRepository;

    public Response<List<Brand>> getAllBrands() {
        return new Response<>(Response.SUCCESS, "Get all brands successfully", brandRepository.findAll());
    }

    public Response<Brand> saveBrand(Brand brand) {
        return new Response<>(Response.SUCCESS, "Save brand successfully", brandRepository.save(brand));
    }

    public Response<Brand> getBrandById(Integer id) {
        return new Response<>(Response.SUCCESS, "Get brand successfully", brandRepository.findById(id).orElse(null));
    }

    public Response<Brand> deleteBrandById(Integer id) {
        Brand brand = brandRepository.findById(id).orElse(null);
        if (brand != null) {
            brandRepository.deleteById(brand.getId());
            return new Response<>(Response.SUCCESS, "Delete brand successfully", brand);
        }
        return new Response<>(Response.NOT_FOUND, "Brand not found");
    }

    public Response<Brand> updateBrand(Integer id, Brand brand) {
        Brand existingBrand = brandRepository.findById(id).orElse(null);
        if (existingBrand != null) {
            existingBrand.setName(brand.getName());
            return new Response<>(Response.SUCCESS, "Update brand successfully", brandRepository.save(existingBrand));
        }
        return new Response<>(Response.NOT_FOUND, "Brand not found");
    }
}
