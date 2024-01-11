package com.hoyoverse.hoyoversebackend.controller;

import com.hoyoverse.hoyoversebackend.model.product.Image;
import com.hoyoverse.hoyoversebackend.model.response.Response;
import com.hoyoverse.hoyoversebackend.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/images")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @GetMapping()
    public Response<List<Image>> getAllImages() {
        return imageService.getAllImages();
    }

    @PostMapping()
    public Response<Image> saveImage(@RequestBody Image image) {
        return imageService.saveImage(image);
    }

    @GetMapping("/{id}")
    public Response<Image> getImageById(@PathVariable("id") Integer id) {
        return imageService.getImageById(id);
    }

    @DeleteMapping("/{id}")
    public Response<Image> deleteImageById(@PathVariable("id") Integer id) {
        return imageService.deleteImageById(id);
    }

    @PutMapping("/{id}")
    public Response<Image> updateImage(@PathVariable("id") Integer id, @RequestBody Image image) {
        return imageService.updateImage(id, image);
    }
}
