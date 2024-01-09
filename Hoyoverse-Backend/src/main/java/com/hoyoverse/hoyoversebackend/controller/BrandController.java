package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Brand;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/brands")
public class BrandController {
    @Autowired
    private BrandService brandService;

    @GetMapping()
    public Response<List<Brand>> getAllBrands() {
        return brandService.getAllBrands();
    }

    @GetMapping("/{id}")
    public Response<Brand> getBrandById(@PathVariable("id") Integer id) {
        return brandService.getBrandById(id);
    }

    @PostMapping()
    public Response<Brand> saveBrand(@RequestBody Brand brand) {
        return brandService.saveBrand(brand);
    }

    @PutMapping("/{id}")
    public Response<Brand> updateBrand(@PathVariable("id") Integer id, @RequestBody Brand brand) {
        return brandService.updateBrand(id, brand);
    }

    @DeleteMapping("/{id}")
    public Response<Brand> deleteBrandById(@PathVariable("id") Integer id) {
        return brandService.deleteBrandById(id);
    }
}
