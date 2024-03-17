package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Brand;
import com.hoyoverse.hoyoversebackend.model.request.CustomPageRequest;
import com.hoyoverse.hoyoversebackend.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/brands")
public class BrandController {
    @Autowired
    private BrandService brandService;

    @GetMapping()
    public Page<Brand> getAllBrands(@RequestParam Map<String, String> requestParams) {
        CustomPageRequest customPageRequest = new CustomPageRequest(requestParams);
        Pageable pageable = customPageRequest.handlePagination();
        return brandService.getAllBrands(pageable);
    }

    @PostMapping()
    public Brand saveBrand(@RequestBody Brand brand) {
        return brandService.saveBrand(brand);
    }
}
