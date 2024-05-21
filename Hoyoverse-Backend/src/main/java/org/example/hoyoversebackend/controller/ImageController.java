package org.example.hoyoversebackend.controller;

import lombok.RequiredArgsConstructor;
import org.example.hoyoversebackend.service.ImageService;
import org.example.hoyoversebackend.model.Image;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/images")
@RequiredArgsConstructor
public class ImageController {
    private final ImageService imageService;

    @GetMapping
    public List<Image> getImages() {
        return imageService.getImages();
    }

    @PostMapping
    public Image saveImage(@RequestBody Image image) {
        return imageService.saveImage(image);
    }

    @DeleteMapping("/{id}")
    public void deleteImage(@PathVariable String id) {
        imageService.deleteById(id);
    }

    @PutMapping("/{id}")
    public Image updateImage(@PathVariable String id, @RequestBody Image image) {
        return imageService.updateImage(id, image);
    }
}
