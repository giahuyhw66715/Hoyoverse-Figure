package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Sizing;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.service.SizingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/sizing")
public class SizingController {
    @Autowired
    private SizingService sizingService;

    @GetMapping()
    public Response<List<Sizing>> getAllSizings() {
        return sizingService.getAllSizings();
    }

    @GetMapping("/{id}")
    public Response<Sizing> getSizingById(@PathVariable("id") Integer id) {
        return sizingService.getSizingById(id);
    }

    @PostMapping()
    public Response<Sizing> saveSizing(@RequestBody Sizing sizing) {
        return sizingService.saveSizing(sizing);
    }

    @PutMapping("/{id}")
    public Response<Sizing> updateSizing(@PathVariable("id") Integer id, @RequestBody Sizing sizing) {
        return sizingService.updateSizing(id, sizing);
    }

    @DeleteMapping("/{id}")
    public Response<Sizing> deleteSizingById(@PathVariable("id") Integer id) {
        return sizingService.deleteSizingById(id);
    }
}
